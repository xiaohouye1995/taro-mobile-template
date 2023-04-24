import React, { useState, useEffect } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { WebView } from '@tarojs/components'
import BasePage from '@/components/BasePage'
import { PROJECT_NAME } from "@/utils/const";

const Web: React.FC = () => {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  
  useEffect(() => {
    const title = decodeURIComponent(router.params.title || PROJECT_NAME)
    Taro.setNavigationBarTitle({ title: title })
    setUrl(router.params.url || '')
    setPageTitle(title)
  }, [router])

  // iframe通信监听h5
  useEffect(() => {
    window.addEventListener('message', receiveMessage, false)
    return () => {
      window.removeEventListener('message', receiveMessage, false)
    }
  })

  const receiveMessage = (e) => {
    console.log('receiveMessage', e.data)
  }

  const handleMessage = (e) => {
    console.log('handleMessage', e.detail)
  }

  return (
    <BasePage pageTitle={pageTitle}>
      <WebView src={decodeURIComponent(url)} onMessage={handleMessage}></WebView>
    </BasePage>
  )
}

export default Web
