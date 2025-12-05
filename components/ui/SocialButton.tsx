interface SocialButtonProps {
  children: string
  href?: string
  onClick?: () => void
}

export default function SocialButton({ children, href, onClick }: SocialButtonProps) {
  const className =
    'border-2 border-accent rounded-[20px] px-[12px] py-[4px] text-accent font-noto font-medium text-[16px] hover:bg-accent hover:text-white transition h-[30px] flex items-center justify-center'

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
