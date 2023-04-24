import { PAGES } from "./utils/pages";
import { PROJECT_NAME } from "./utils/const";

export default defineAppConfig({
  pages: PAGES,
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: PROJECT_NAME,
    navigationBarTextStyle: "black",
    backgroundColor: "#F6F6F6",
    enablePullDownRefresh: false,
  },
  tabBar: {
    color: "#666666",
    selectedColor: "#D25858",
    backgroundColor: "#FFFFFF",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabbar/tab_home.png",
        selectedIconPath: "./assets/tabbar/tab_home_selected.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./assets/tabbar/tab_my.png",
        selectedIconPath: "./assets/tabbar/tab_my_selected.png",
      },
    ],
  },
  permission: {
    "scope.userLocation": {
      desc: `你的位置信息将用于${PROJECT_NAME}内部位置信息效果展示`,
    },
  },
});
