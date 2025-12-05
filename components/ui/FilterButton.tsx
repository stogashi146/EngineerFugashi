interface FilterButtonProps {
  children: string
  active?: boolean
  onClick?: () => void
}

export default function FilterButton({ children, active = false, onClick }: FilterButtonProps) {
  const baseStyles =
    'border-2 border-accent rounded-[20px] px-[8px] md:px-[12px] py-[10px] font-noto font-medium text-[14px] md:text-[16px] transition h-[36px] md:h-[40px] w-[100px] md:w-[132px] flex items-center justify-center'
  const activeStyles = active
    ? 'bg-accent text-main'
    : 'text-accent hover:bg-accent hover:text-white'

  return (
    <button onClick={onClick} className={`${baseStyles} ${activeStyles}`}>
      {children}
    </button>
  )
}
