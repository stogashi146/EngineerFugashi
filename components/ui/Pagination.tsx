'use client'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 h-[30px]">
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-2 border-accent rounded-[20px] px-[12px] py-[10px] h-[30px] flex items-center justify-center hover:bg-accent hover:text-white transition disabled:opacity-50"
      >
        <svg width="7.4" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="2" className="text-accent"/>
        </svg>
      </button>

      <div className="font-noto font-medium text-[18px] text-black leading-[normal]">
        <span className="text-accent underline">{currentPage}</span>
        {' '}2 3 ・・・ {totalPages - 2} {totalPages - 1} {totalPages}
      </div>

      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-2 border-accent rounded-[20px] px-[12px] py-[10px] h-[30px] flex items-center justify-center hover:bg-accent hover:text-white transition disabled:opacity-50"
      >
        <svg width="7.4" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="2" className="text-accent"/>
        </svg>
      </button>
    </div>
  )
}
