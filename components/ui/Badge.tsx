interface BadgeProps {
  children: string
  variant?: 'primary' | 'secondary'
}

export default function Badge({ children, variant = 'secondary' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-accent text-main',
    secondary: 'bg-main text-accent',
  }

  return (
    <div
      className={`${variantStyles[variant]} flex items-center justify-center rounded-[2px] px-[6px] py-[4px]`}
    >
      <p className="font-noto text-[12px] leading-[normal]">{children}</p>
    </div>
  )
}
