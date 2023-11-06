/**
 * @desc 弹出层组件
 */
import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

/**
 * @interface 弹窗配置项
 */
interface IPopupProps extends IProps {
  /**
   * @name 是否显示
   */
  show: boolean
  /**
   * @name 关闭弹窗事件
   */
  onClose: () => void
  /**
   * @name 弹出模式
   * @property {string} bottom 从底部弹出
   * @property {string} center 从中间弹出
   */
  mode?: 'center' | 'bottom'
  /**
   * @name 底部弹出层高度
   */
  bottomHeight?: number
  /**
   * @name 自定义CSS类名
   */
  className?: string
  /**
   * @name 是否可以点击遮罩关闭
   * @default true 可以关闭
   */
  maskClosable?: boolean
  /**
   * @name 是否隐藏关闭图标
   * @default false 不隐藏
   */
  hideClose?: boolean
}

const Popup: React.FC<IPopupProps> = (props: IPopupProps) => {
  const {
    show,
    mode = 'center',
    className,
    bottomHeight,
    hideClose = false,
    maskClosable = true,
    onClose
  } = props

  const handlePopupClose = () => {
    onClose && onClose()
  }

  const popupbottomheight = bottomHeight ? `--popup-bottom-height: ${bottomHeight || 400}` : ''

  useEffect(() => {
    if (show) {
      Taro.hideTabBar()
    } else {
      Taro.showTabBar()
    }
  }, [show])

  return (
    <View
      className={['popup', show ? 'popup-show' : 'popup-hide', mode, className].join(' ')}
      style={popupbottomheight}
    >
      <View className='popup-mask' onClick={() => maskClosable && handlePopupClose()}></View>
      <View className='popup-wrapper'>{props.children}</View>
      {!hideClose && (
        <View className='iconfont icon-error-1 popup-icon-close' onClick={handlePopupClose}></View>
      )}
    </View>
  )
}

export default Popup
