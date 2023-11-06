/**
 * @desc 基础页面组件
 */
import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import './index.scss'

/**
 * @interface 基础页配置项
 */
interface IPageProps extends IProps {
  /**
   * @name 页面标题
   */
  pageTitle?: string
  /**
   * @name 导航条样式类
   */
  NavClassName?: string
  /**
   * @name 是否为底部tab页
   */
  isTabPage?: boolean
  /**
   * @name 自定义CSS类名
   */
  className?: string
}

const BasePage: React.FC<IPageProps> = (props: IPageProps) => {
  const { className, pageTitle, NavClassName, isTabPage } = props

  const useCustomNav = useSelector((state: RootState) => state.global.useCustomNav)

  return (
    <View
      className={['basepage', process.env.TARO_ENV === 'h5' && isTabPage && 'area-bottom'].join(
        ' '
      )}
    >
      {useCustomNav && (
        <View className={`custom-navigation ${NavClassName}`}>
          {!isTabPage && (
            <View
              onClick={() => Taro.navigateBack()}
              className='iconfont icon-arrow-left custom-navigation-icon'
            />
          )}
          <View className='custom-navigation-title'>{pageTitle}</View>
        </View>
      )}
      <View className={className}>{props.children}</View>
    </View>
  )
}

export default BasePage
