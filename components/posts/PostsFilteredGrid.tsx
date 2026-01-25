'use client'

import { useState } from 'react'
import FilterButton from '../ui/FilterButton'
import PostCard from './PostCard'
import Pagination from '../ui/Pagination'
import type { Post } from '@/types/post'

interface PostsFilteredGridProps {
  posts: Post[]
  showFilters?: boolean
  maxItems?: number
  filterButtonSize?: 'small' | 'medium'
  filterGap?: string
  filterMarginBottom?: string
  showPagination?: boolean
  itemsPerPage?: number
}

const sourceLabels: Record<string, string> = {
  All: 'All',
  wordpress: 'Blog',
  qiita: 'Qiita',
  note: 'Note',
}

export default function PostsFilteredGrid({
  posts,
  showFilters = true,
  maxItems,
  filterButtonSize = 'medium',
  filterGap = 'gap-[12px] md:gap-[19px]',
  filterMarginBottom = 'mb-[32px] md:mb-[44px]',
  showPagination = false,
  itemsPerPage = 8,
}: PostsFilteredGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const sources = ['All', 'wordpress', 'qiita', 'note']

  const filteredPosts =
    activeFilter === 'All' ? posts : posts.filter((post) => post.source === activeFilter)

  // ページネーションの計算
  const totalPages = showPagination ? Math.ceil(filteredPosts.length / itemsPerPage) : 1
  const startIndex = showPagination ? (currentPage - 1) * itemsPerPage : 0
  const endIndex = showPagination ? startIndex + itemsPerPage : filteredPosts.length

  const displayPosts = maxItems
    ? filteredPosts.slice(0, maxItems)
    : filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  return (
    <>
      {showFilters && (
        <div className={`flex overflow-x-auto ${filterGap} ${filterMarginBottom}`}>
          {sources.map((source) => (
            <FilterButton
              key={source}
              active={activeFilter === source}
              onClick={() => handleFilterChange(source)}
              size={filterButtonSize}
            >
              {sourceLabels[source]}
            </FilterButton>
          ))}
        </div>
      )}

      <div className={showPagination || showFilters ? 'min-h-[600px] md:min-h-[700px]' : ''}>
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:grid-cols-4 md:gap-x-[23px] md:gap-y-[17px]">
            {displayPosts.map((post) => (
              <PostCard
                key={post.id}
                imageUrl={post.imageUrl}
                title={post.title}
                date={post.formattedDate}
                url={post.url}
                source={post.source}
              />
            ))}
          </div>
        ) : (
          <p className="py-[40px] text-center font-noto-jp text-[16px] text-[#373737]">
            なにも見つかりません
          </p>
        )}
      </div>

      {showPagination && (
        <div className="mt-[32px] min-h-[40px] md:mt-[40px]">
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  )
}
