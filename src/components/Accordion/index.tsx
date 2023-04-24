import React, { useState } from 'react'
import type { SyntheticEvent } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'

interface IAccordionType {
  defaultIndex: number | string
  onItemClick?(key: number | string): void
  children: JSX.Element[]
  className?: string
}

interface IAccordionItemType extends IProps {
  index: string | number
  label: string
  icon?: string
  isCollapsed?: boolean
  className?: string
  labelClassName?: string
  handleClick?(e: SyntheticEvent): void
}

export const AccordionItem: React.FC<IAccordionItemType> = (props: IAccordionItemType) => {
  const { label, icon, isCollapsed, className, labelClassName, handleClick } = props
  return (
    <View className={`accordionItemContainer ${className}`}>
      <View className={`accordionItemContainer_hd ${!isCollapsed && 'collapsed'}`} onClick={(e: any) => handleClick && handleClick(e)}>
        {icon && <Image className='accordionItemContainer_icon' src={icon} />}
        <View className={`accordionItemContainer_label ${labelClassName}`}>{label}</View>
        <View className={['iconfont icon-arrow-up accordionItemContainer_arrow', isCollapsed && 'accordionItemContainer_arrow_up'].join(' ')}></View>
      </View>
      <View aria-expanded={isCollapsed} className={`accordionItemContent ${isCollapsed ? ' collapsed' : ' expanded'}`}>
        {props.children}
      </View>
    </View>
  )
}

export const Accordion: React.FC<IAccordionType> = (prop: IAccordionType) => {
  const { defaultIndex, onItemClick, children, className } = prop
  const [bindIndex, setBindIndex] = useState(defaultIndex)
  const changeItem = (index: number | string) => {
    if (typeof onItemClick === 'function') {
      onItemClick(index)
    }
    if (index !== bindIndex) {
      setBindIndex(index)
    } else {
      setBindIndex(-1)
    }
  }
  const items = children?.filter(item => item?.type?.name === 'AccordionItem')

  return (
    <View className={`accordionContainer ${className}`}>
      {items?.map(({ props }) => (
        <AccordionItem
          key={props.index}
          index={props.index}
          label={props.label}
          icon={props.icon}
          className={props.className}
          labelClassName={props.labelClassName}
          isCollapsed={bindIndex !== props.index}
          handleClick={() => changeItem(props.index)}
        >
          {props.children}
        </AccordionItem>
      ))}
    </View>
  )
}
