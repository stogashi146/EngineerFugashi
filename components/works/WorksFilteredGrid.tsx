'use client'

import { useState } from 'react'
import FilterButton from '../ui/FilterButton'
import WorkDetailCard from './WorkDetailCard'
import Pagination from '../ui/Pagination'
import { Work } from '@/data/works'

interface WorksFilteredGridProps {
  works: Work[]
  showFilters?: boolean
  maxItems?: number
  showBadges?: boolean
  filterButtonSize?: 'small' | 'medium'
  filterGap?: string
  filterMarginBottom?: string
  showPagination?: boolean
  itemsPerPage?: number
}

export default function WorksFilteredGrid({
  works,
  showFilters = true,
  showBadges = true,
  maxItems,
  filterButtonSize = 'medium',
  filterGap = 'gap-[12px] md:gap-[19px]',
  filterMarginBottom = 'mb-[32px] md:mb-[44px]',
  showPagination = false,
  itemsPerPage = 8,
}: WorksFilteredGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const filteredWorks =
    activeFilter === 'All'
      ? works
      : works.filter((work) => work.badges.some((badge) => badge.label === activeFilter))

  // ページネーションの計算
  const totalPages = showPagination ? Math.ceil(filteredWorks.length / itemsPerPage) : 1
  const startIndex = showPagination ? (currentPage - 1) * itemsPerPage : 0
  const endIndex = showPagination ? startIndex + itemsPerPage : filteredWorks.length

  const displayWorks = maxItems
    ? filteredWorks.slice(0, maxItems)
    : filteredWorks.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // ページ変更時に画面トップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // フィルター変更時にページを1にリセット
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  return (
    <>
      {showFilters && (
        <div className={`flex ${filterGap} ${filterMarginBottom}`}>
          <FilterButton
            active={activeFilter === 'All'}
            onClick={() => handleFilterChange('All')}
            size={filterButtonSize}
          >
            All
          </FilterButton>
          <FilterButton
            active={activeFilter === 'ClientWork'}
            onClick={() => handleFilterChange('ClientWork')}
            size={filterButtonSize}
          >
            ClientWork
          </FilterButton>
          <FilterButton
            active={activeFilter === 'Original'}
            onClick={() => handleFilterChange('Original')}
            size={filterButtonSize}
          >
            Original
          </FilterButton>
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:grid-cols-4 md:gap-x-[24px] md:gap-y-[17px]">
        {displayWorks.map((work) => (
          <WorkDetailCard
            key={work.id}
            id={work.id}
            imageUrl={work.imageUrl}
            category={work.category}
            period={work.period}
            title={work.title}
            badges={showBadges ? work.badges : []}
          />
        ))}
      </div>

      {showPagination && totalPages > 1 && (
        <div className="mt-[32px] md:mt-[40px]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  )
}
