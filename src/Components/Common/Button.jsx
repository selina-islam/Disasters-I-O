import React, { children } from 'react'
import { cn } from '../lib/utils/cn'

export const Button = ({children, className}) => {
  return (
    <button className={cn('h-[42px] w-[142px] bg-orange rounded-[6px] text-white font-bold hover:bg-amber-700 transition-all duration-200 text-[12px] hover:text-zinc-50', className)}>{ children}</button>
  )
}
