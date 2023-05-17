import React from 'react'
import ReactDOM from 'react-dom'
import { View } from '@tarojs/components'
import './index.scss'

interface MyProps {
  title: string
  content: string
  onConfirm: () => void
  onCancel?: () => void
  className?: string
}

const CustomModal = (props: MyProps) => {
  const { title, content, onCancel, onConfirm, className } = props
  return (
    <View className={`wdModal ${className}`}>
      <View className='wdModal-box'>
        <View className='wdModal-title'>{title}</View>
        <View className='wdModal-content'>{content}</View>
        <View className='wdModal-bottom'>
          <View
            className='wdModal-button wdModal-button-cancel'
            onClick={() => onCancel && onCancel()}
          >
            取消
          </View>
          <View
            className='wdModal-button wdModal-button-success'
            onClick={() => {
              onConfirm()
              onCancel && onCancel()
            }}
          >
            确认
          </View>
        </View>
      </View>
    </View>
  )
}

function Wrapper(Component: React.FC<MyProps>) {
  const container = document.createElement('div')

  const hide = function () {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
  }
  const show = function (props: MyProps) {
    document.body.appendChild(container)
    ReactDOM.render(<Component {...props} onCancel={hide} />, container)
  }

  return {
    show,
  }
}

export default Wrapper(CustomModal)
