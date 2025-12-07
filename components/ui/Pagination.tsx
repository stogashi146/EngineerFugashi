'use client'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // ページ番号を生成する関数
  const generatePageNumbers = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      // 総ページ数が7以下の場合は全て表示
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // 総ページ数が8以上の場合
      if (currentPage <= 3) {
        // 現在ページが最初の方（1,2,3）
        pages.push(1, 2, 3, 4, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        // 現在ページが最後の方
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        // 現在ページが中間
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }

    return pages
  }

  const pageNumbers = generatePageNumbers()

  return (
    <div className="flex h-[30px] items-center justify-center gap-[12px] md:gap-4">
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
        className={`group flex h-[30px] transform items-center justify-center rounded-[20px] border-2 border-accent px-[12px] py-[10px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-accent hover:text-white hover:shadow-md active:scale-95 disabled:opacity-50 disabled:hover:scale-100 ${currentPage === 1 ? 'pointer-events-none' : ''}`}
      >
        <svg
          width="7.4"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          className="group-hover:text-white"
        >
          <path
            d="M7 1L2 6L7 11"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent group-hover:text-white"
          />
        </svg>
      </button>

      <div className="flex items-center gap-[8px] font-noto text-[14px] font-medium leading-[normal] text-black md:gap-[12px] md:text-[18px]">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="text-black">
                ・・・
              </span>
            )
          }

          return (
            <button
              key={page}
              onClick={() => typeof page === 'number' && onPageChange?.(page)}
              className={`transition-colors duration-200 ${
                page === currentPage ? 'text-text' : 'text-accent underline hover:text-accent'
              }`}
            >
              {page}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`group flex h-[30px] transform items-center justify-center rounded-[20px] border-2 border-accent px-[12px] py-[10px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-accent hover:text-white hover:shadow-md active:scale-95 disabled:opacity-50 disabled:hover:scale-100 ${currentPage === totalPages ? 'pointer-events-none' : ''}`}
      >
        <svg
          width="7.4"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          className="group-hover:text-white"
        >
          <path
            d="M1 11L6 6L1 1"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent group-hover:text-white"
          />
        </svg>
      </button>
    </div>
  )
}
