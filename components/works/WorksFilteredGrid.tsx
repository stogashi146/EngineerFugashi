'use client'

import { useState } from 'react'
import FilterButton from '../ui/FilterButton'
import WorkDetailCard from './WorkDetailCard'
import { Work } from '@/data/works'

interface WorksFilteredGridProps {
  works: Work[]
  showFilters?: boolean
  maxItems?: number
  showBadges?: boolean
  filterButtonSize?: 'small' | 'medium'
  filterGap?: string
  filterMarginBottom?: string
}

export default function WorksFilteredGrid({
  works,
  showFilters = true,
  showBadges = true,
  maxItems,
  filterButtonSize = 'medium',
  filterGap = 'gap-[12px] md:gap-[19px]',
  filterMarginBottom = 'mb-[32px] md:mb-[44px]',
}: WorksFilteredGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filteredWorks =
    activeFilter === 'All'
      ? works
      : works.filter((work) => work.badges.some((badge) => badge.label === activeFilter))

  const displayWorks = maxItems ? filteredWorks.slice(0, maxItems) : filteredWorks

  return (
    <>
      {showFilters && (
        <div className={`flex ${filterGap} ${filterMarginBottom}`}>
          <FilterButton
            active={activeFilter === 'All'}
            onClick={() => setActiveFilter('All')}
            size={filterButtonSize}
          >
            All
          </FilterButton>
          <FilterButton
            active={activeFilter === 'ClientWork'}
            onClick={() => setActiveFilter('ClientWork')}
            size={filterButtonSize}
          >
            ClientWork
          </FilterButton>
          <FilterButton
            active={activeFilter === 'Original'}
            onClick={() => setActiveFilter('Original')}
            size={filterButtonSize}
          >
            Original
          </FilterButton>
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:grid-cols-4 md:gap-x-[24px] md:gap-y-[17px]">
        {displayWorks.map((work, index) => (
          <div
            key={work.id}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <WorkDetailCard
              id={work.id}
              imageUrl={work.imageUrl}
              category={work.category}
              period={work.period}
              title={work.title}
              badges={showBadges ? work.badges : []}
            />
          </div>
        ))}
      </div>
    </>
  )
}
