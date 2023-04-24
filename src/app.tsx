import { Component, PropsWithChildren } from "react";
import Taro from "@tarojs/taro";
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import '@/assets/iconfont/iconfont.css'
import '@/styles/base.scss'
import "./app.scss";

class App extends Component<PropsWithChildren> {

  componentDidMount() {
    this.handleStartup()
  }

  componentDidShow() {
    this.checkVersion();
  }

  componentDidHide() {}

  /**
   * 检查并更新版本
   */
  checkVersion() {
    // 更新版本管理只有线上版本才有版本的概念，体验版没有，h5也没有
    // 所以需要对以下代码进行编译环境处理
    if (
      process.env.NODE_ENV === "production" &&
      process.env.TARO_ENV !== "h5"
    ) {
      const updateManager = Taro.getUpdateManager();
      updateManager.onUpdateReady(function () {
        Taro.showModal({
          title: "更新提示",
          content: "新版本已经准备好，请重启应用！",
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          },
        });
      });
    }
  }

  /**
   * 获取启动参数
   */
  handleStartup() {
    // 获取是否使用自定义标题栏
    store.dispatch.global.setUseCustomNav()
  }

  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App