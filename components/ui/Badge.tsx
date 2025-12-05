interface BadgeProps {
  children: string
  variant?: 'primary' | 'secondary'
}

export default function Badge({ children, variant = 'secondary' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-accent text-main',
    secondary: 'bg-main text-accent'
  }

  return (
    <div className={`${variantStyles[variant]} px-[6px] py-[4px] rounded-[2px] flex items-center justify-center`}>
      <p className="font-noto font-bold text-[12px] leading-[normal]">
        {children}
      </p>
    </div>
  )
}
