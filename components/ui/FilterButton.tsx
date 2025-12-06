interface FilterButtonProps {
  children: string
  active?: boolean
  onClick?: () => void
  size?: 'small' | 'medium'
}

export default function FilterButton({
  children,
  active = false,
  onClick,
  size = 'medium',
}: FilterButtonProps) {
  const sizeStyles =
    size === 'small'
      ? 'h-[36px] w-[100px] px-[8px] text-[14px] md:h-[36px] md:w-[100px] md:px-[8px] md:text-[14px]'
      : 'h-[36px] w-[100px] px-[8px] text-[14px] md:h-[40px] md:w-[132px] md:px-[12px] md:text-[16px]'

  const baseStyles = `border-2 border-accent rounded-[20px] py-[10px] font-noto font-medium transition-all duration-300 ease-in-out flex items-center justify-center transform hover:scale-105 active:scale-95 ${sizeStyles}`

  const activeStyles = active
    ? 'bg-accent text-main shadow-lg'
    : 'text-accent hover:bg-accent hover:text-white hover:shadow-md'

  return (
    <button onClick={onClick} className={`${baseStyles} ${activeStyles}`}>
      {children}
    </button>
  )
}
