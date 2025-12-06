'use client'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex h-[30px] items-center justify-center gap-[12px] md:gap-4">
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-[30px] items-center justify-center rounded-[20px] border-2 border-accent px-[12px] py-[10px] transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:bg-accent hover:text-white hover:shadow-md disabled:opacity-50 disabled:hover:scale-100"
      >
        <svg width="7.4" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="2" className="text-accent" />
        </svg>
      </button>

      <div className="font-noto text-[14px] font-medium leading-[normal] text-black md:text-[18px]">
        <span className="text-accent underline">{currentPage}</span> 2 3 ・・・ {totalPages - 2}{' '}
        {totalPages - 1} {totalPages}
      </div>

      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-[30px] items-center justify-center rounded-[20px] border-2 border-accent px-[12px] py-[10px] transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:bg-accent hover:text-white hover:shadow-md disabled:opacity-50 disabled:hover:scale-100"
      >
        <svg width="7.4" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="2" className="text-accent" />
        </svg>
      </button>
    </div>
  )
}
