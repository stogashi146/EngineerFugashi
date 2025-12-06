import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  onClick?: () => void
  href?: string
  className?: string
  icon?: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  className = '',
  icon,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-noto font-medium transition-all duration-300 ease-in-out rounded-[20px] transform hover:scale-105 active:scale-95'

  const variantStyles = {
    primary:
      'bg-accent text-main hover:bg-opacity-90 hover:text-accent hover:border-accent hover:bg-base hover:border-2 hover:shadow-md',
    secondary: 'bg-accent border-2 border-accent text-main hover:bg-opacity-90 hover:shadow-md',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white hover:shadow-md',
  }

  const sizeStyles = {
    small: 'px-[12px] py-[4px] text-[14px] h-[30px]',
    medium: 'px-[12px] py-[10px] text-[14px] h-[32px] w-[144px]',
    large: 'px-[12px] py-[10px] text-[14px] h-[40px] w-[132px]',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  )
}
