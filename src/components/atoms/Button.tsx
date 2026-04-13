import React, { ReactNode } from 'react'
import { cn } from '@/lib/cn'
interface props{
  children:ReactNode,
  className?:string,
  variant?:"primary"| "secondary"|"outline",
  size?:"sm"|"md"|"lg",
  center?:boolean,
    disabled?:boolean


}
const Button = ({variant="primary",size="sm",className="w-fit h-fit capitalize cursor-pointer ds-hover hover:opacity-70! ",disabled=false,center,children,...props}:props) => {
  const variants={
primary:"ds-bg-primary ",
secondary:"ds-bg-primary-200",
outline:"bg-transparent  ds-border-sm",
disabled:""
  }
  const sizes={  
    sm:"ds-p-sm  ds-rounded-sm",
    md:"ds-p-md  ds-rounded-md",
    lg:"ds-p-lg  ds-rounded-lg",
    

  }
  return (
    <button className={cn(sizes[size],variants[variant],center?"text-center":"",disabled&&"ds-text-disabled",className,)} {...props}>{children}</button>
  )
}

export default Button