/**
 * @desc 暂无数据组件
 */
import React from 'react'
import { View, Button, Image } from '@tarojs/components'
import { navigateToPage } from '@/utils/common'
import noDataImg from '@/assets/common/no_data.png'
import './index.scss'

/**
 * @interface 暂无数据配置项
 */
interface IPageProps extends IProps {
  /**
   * @name 图片链接
   */
  img?: string
  /**
   * @name 按钮名称
   */
  buttonName?: string
  /**
   * @name 文字描述
   */
  desc?: string
  /**
   * @name 自定义CSS类名
   */
  className?: string
  /**
   * @name 自定义事件
   */
  callback?: () => void
}

const NoData: React.FC<IPageProps> = (props: IPageProps) => {
  const { className, img, desc, buttonName, callback } = props
  const GotoIndex = () => {
    navigateToPage('/pages/index/index', 'switchTab')
  }
  return (
    <View className={`noData_page ${className}`}>
      <Image className='noData-img' src={img || noDataImg} mode='aspectFill' />
      <View className='noData-desc'>{desc}</View>
      {buttonName && (
        <Button className='noData-btn' onClick={callback ? callback : GotoIndex}>
          {buttonName}
        </Button>
      )}
      {props.children}
    </View>
  )
}

export default NoData
