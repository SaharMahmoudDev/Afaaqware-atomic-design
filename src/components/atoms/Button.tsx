import React, { ReactNode } from 'react'
import { cn } from '@/lib/cn'
interface props{
  children:ReactNode,
  className?:string,
  variant?:"primary"| "secondary"|"outline",
  size?:"sm"|"md"|"lg",
  center?:boolean,
    disabled?:boolean,
    color?:string



}
const Button = ({variant="primary",size="sm",className,disabled=false,center,color,children,...props}:props) => {
  const basicClasses="w-fit h-fit capitalize cursor-pointer ds-hover hover:opacity-70! "
  const variants={
primary:"ds-bg-primary ",
secondary:"ds-bg-primary-200",
outline:"bg-transparent  ds-border-sm",

  }
  const sizes={  
    sm:"ds-p-sm  ds-rounded-sm",
    md:"ds-p-md  ds-rounded-md",
    lg:"ds-p-lg  ds-rounded-lg",
    

  }
  return (
    <button className={cn(sizes[size],basicClasses,color?color:variants[variant],center?"text-center":"",disabled&&"ds-text-disabled",className)} {...props}>{children}</button>
  )
}

export default Button