import React, { useState, useEffect } from 'react'
import Taro, { usePullDownRefresh, useShareAppMessage } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import BasePage from '@/components/BasePage'
import Loading from '@/components/Loading'
import Popup from '@/components/Popup'
import { Accordion, AccordionItem } from '@/components/Accordion'
import CustomModal from '@/components/CustomModal'
import './index.scss'

interface IPageProps extends IProps {
  title: string
}

const Example: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [isPopupBottom, setIsPopupBottom] = useState(false)
  const [isPopupCenter, setIsPopupCenter] = useState(false)
  const Words = [
    't1, T1 级别--标准字 34px 加粗 123456789 abc',
    't2, T2 级别--标准字 32px 加粗 123456789 abc',
    't3, T3 级别--标准字 30px 加粗 123456789 abc',
    't4, T4 级别--标准字 28px 123456789 abc',
    't5, T5 级别--标准字 26px 123456789 abc',
    't6, T6 级别--标准字 24px 123456789 abc',
    't7, T7 级别--标准字 22px 123456789 abc',
    't8, T8 级别--标准字 20px 123456789 abc',
    't9, T9 级别--标准字 18px 123456789 abc',
    't10, T10 级别--标准字 16px 123456789 abc'
  ]
  const colors = [
    '#333333 text-default',
    '#FF4E4F text-primary',
    '#666666 text-gray',
    '#A5A5A5 text-light'
  ]

  const rounds = [
    'round-xs XS圆角',
    'round-sm SM圆角',
    'round 正常圆角',
    'round-lg LG圆角',
    'round-xl XL圆角',
    'round-full 完全圆角'
  ]

  const accordionList = [
    {
      title: '标题一',
      context: '内容一'
    },
    {
      title: '标题二',
      context: '内容二'
    },
    {
      title: '标题三',
      context: '内容三'
    }
  ]

  // 分享
  useShareAppMessage(() => {
    return {
      path: `/pages/example/index`
    }
  })

  // 下拉刷新
  usePullDownRefresh(async () => {
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 200)
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const RenderCell: React.FC<IPageProps> = (props: IPageProps) => {
    const { title } = props
    return (
      <View className='p-40'>
        <View className='mb-24 t1'>{title}</View>
        {props.children}
      </View>
    )
  }

  return (
    <BasePage className='example_page' pageTitle='示例'>
      {loading && <Loading title='正在加载中...' className='mt-40' />}
      {!loading && (
        <View>
          <RenderCell title='文字'>
            {Words.map(item => {
              return (
                <View key={item} className={item.split(',')[0]}>
                  {item.split(',')[1]}
                </View>
              )
            })}
          </RenderCell>
          <RenderCell title='颜色'>
            {colors.map(item => {
              return (
                <View key={item} className={item.split(' ')[1]}>
                  默认标准字体大小 {item}
                </View>
              )
            })}
          </RenderCell>
          <RenderCell title='圆角'>
            <View className='flex flex-wrap'>
              {rounds.map(item => {
                return (
                  <View
                    key={item}
                    className={`rectangular-demo mr-16 t6 mb-16 primary ${item.split(' ')[0]}`}
                  >
                    {item.split(' ')[1]}
                  </View>
                )
              })}
            </View>
          </RenderCell>
          <RenderCell title='按钮'>
            <View className='flex'>
              <Button className='button button-primary'>主按钮</Button>
              <Button className='button is-plain ml-20'>次按钮</Button>
            </View>
          </RenderCell>
          <RenderCell title='弹出层组件'>
            <View className='flex'>
              <Button className='button button-primary' onClick={() => setIsPopupCenter(true)}>
                从中间弹出
              </Button>
              <Button
                className='button button-primary ml-20'
                onClick={() => setIsPopupBottom(true)}
              >
                从底部弹出
              </Button>
            </View>
          </RenderCell>
          <RenderCell title='自定义api调用弹窗'>
            <View className='flex'>
              <Button
                className='button button-primary'
                onClick={() => {
                  CustomModal.show({
                    title: '安全提醒',
                    content: '您的账号已在别处登录，确定要登录吗？',
                    onConfirm: () => {
                      console.log('点击成功')
                    }
                  })
                }}
              >
                弹出
              </Button>
            </View>
          </RenderCell>
          <RenderCell title='手风琴'>
            <Accordion defaultIndex='1'>
              {accordionList.map((item, index) => {
                return (
                  <AccordionItem
                    key={item.title}
                    label={item.title}
                    index={String(index + 1)}
                    labelClassName='ml-24'
                  >
                    <View className='p-24'>
                      <View>{item.context}</View>
                    </View>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </RenderCell>
          <Popup show={isPopupCenter} onClose={() => setIsPopupCenter(false)} mode='center'>
            <View className='popup-box'>从中间弹出</View>
          </Popup>
          <Popup
            show={isPopupBottom}
            bottomHeight={800}
            onClose={() => setIsPopupBottom(false)}
            mode='bottom'
            hideClose
          >
            <View className='p-20 text-center'>从底部弹出</View>
          </Popup>
        </View>
      )}
    </BasePage>
  )
}

export default Example
