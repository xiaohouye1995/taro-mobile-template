/**
 * @desc 悬浮球组件
 */
import React, { useEffect, useRef, useState } from 'react'
import { usePageScroll } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import icon_hoverBall_close from '@/assets/common/icon_hoverBall_close.png'
import './index.scss'

interface IPageProps extends IProps {
  top: number
  right: number
  img?: string
  close?: boolean
  className?: string
  onClose?: () => void
  onClick?: () => void
}

let scrollTimer: any = null

const FloatingBall: React.FC<IPageProps> = (props: IPageProps) => {
  const { className, img, top, right, close, onClose, onClick } = props

  const [hoverBallTop, setHoverBallTop] = useState(top)
  const [hoverBallRight, setHoverBallRight] = useState(right)

  const floatingBallRef = useRef<HTMLWebViewElement>()

  useEffect(() => {
    floatingBallRef.current?.addEventListener(
      'touchmove',
      e => {
        if (e.cancelable) {
          e.preventDefault()
        }
      },
      {
        passive: false
      }
    )
  }, [])

  usePageScroll(() => {
    // 监听页面的滚动开始和结束
    clearTimeout(scrollTimer)
    setHoverBallRight(-20)
    scrollTimer = setTimeout(() => {
      setHoverBallRight(30)
    }, 100)
  })

  const touchMoveHoverBall = (e: any) => {
    if (e.targetTouches.length === 1) {
      const touch = e.targetTouches[0]
      const itemHeight = 48
      setHoverBallTop(touch.clientY - itemHeight / 2)
    }
  }

  return (
    <View
      className={['FloatingBall', className].join(' ')}
      ref={floatingBallRef}
      onTouchMove={e => {
        touchMoveHoverBall(e)
      }}
      style={{
        top: `${hoverBallTop}px`,
        right: `${hoverBallRight}px`
      }}
    >
      {close && (
        <Image
          className='FloatingBall-closeBtn'
          onClick={() => onClose && onClose()}
          src={icon_hoverBall_close}
        />
      )}
      {img && (
        <Image
          className='FloatingBall-img'
          src={img}
          image-menu-prevent='true'
          onClick={() => onClick && onClick()}
        ></Image>
      )}
      {props.children}
    </View>
  )
}

export default FloatingBall
