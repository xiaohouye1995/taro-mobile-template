import React from 'react'
import { View, Button } from '@tarojs/components'
import { navigateToPage, navigateToH5 } from '@/utils/common'
import { PROJECT_NAME } from '@/utils/const'
import BasePage from '@/components/BasePage'
import { getUserInfo } from '@/apis/common'
import './index.scss'

const Index: React.FC = () => {
  return (
    <BasePage pageTitle='首页' isTabPage>
      <View className='p-40'>
        <View className='t1'>{PROJECT_NAME}</View>
        <View className='mt-40'>
          <Button
            className='button button-primary'
            onClick={() => navigateToPage('/pages/example/index')}
          >
            前往示例页
          </Button>
          <Button
            className='button is-plain ml-20'
            onClick={() => navigateToPage('/pages/xxx/index')}
          >
            前往404页
          </Button>
          <Button
            className='button is-plain ml-20'
            onClick={() => {
              getUserInfo().then(res => {
                console.log(res)
              })
            }}
          >
            请求接口
          </Button>
          <Button
            className='button is-plain mt-20'
            onClick={() => navigateToH5('https://www.baidu.com')}
          >
            前往web页
          </Button>
        </View>
      </View>
    </BasePage>
  )
}

export default Index
