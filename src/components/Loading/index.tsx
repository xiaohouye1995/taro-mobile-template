/**
 * @desc 加载组件
 */
import React from 'react'
import { View } from '@tarojs/components'
import './index.scss'

/**
 * @interface loading配置项
 */
interface IPageProps extends IProps {
  /**
   * @name 文字描述
   */
  title?: string
  /**
   * @name 自定义CSS类名
   */
  className?: string
}

const Loading: React.FC<IPageProps> = (props: IPageProps) => {
  const { className, title } = props

  return (
    <View className={`loading ${className}`}>
      <View className='loading-icon'></View>
      {title && <View className='loading-title'>{title}</View>}
    </View>
  )
}

export default Loading
