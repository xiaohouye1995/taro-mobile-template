import React from 'react'
import BasePage from '@/components/BasePage'
import NoData from '@/components/NoData'
import './index.scss'

const PageNotFound: React.FC = () => {
  return (
    <BasePage pageTitle='404'>
      <NoData className='mt-200' desc='找不到页面' buttonName='回到首页'></NoData>
    </BasePage>
  )
}

export default PageNotFound
