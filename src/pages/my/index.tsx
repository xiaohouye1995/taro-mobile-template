import React from 'react'
import BasePage from '@/components/BasePage'
import NoData from '@/components/NoData'
import './index.scss'

const Index: React.FC = () => {
  return (
    <BasePage pageTitle='我的' isTabPage>
      <NoData className='mt-200' desc='空空如也~' />
    </BasePage>
  )
}

export default Index
