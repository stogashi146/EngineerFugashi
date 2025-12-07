'use client'

import { useState } from 'react'
import FilterButton from '../ui/FilterButton'
import PostDetailCard from './PostDetailCard'
import Pagination from '../ui/Pagination'
import { Post } from '@/data/posts'

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

  // カテゴリーのリストを動的に生成
  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))]

  const filteredPosts =
    activeFilter === 'All' ? posts : posts.filter((post) => post.category === activeFilter)

  // ページネーションの計算
  const totalPages = showPagination ? Math.ceil(filteredPosts.length / itemsPerPage) : 1
  const startIndex = showPagination ? (currentPage - 1) * itemsPerPage : 0
  const endIndex = showPagination ? startIndex + itemsPerPage : filteredPosts.length

  const displayPosts = maxItems ? filteredPosts.slice(0, maxItems) : filteredPosts.slice(startIndex, endIndex)

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
        <div className={`flex overflow-x-auto ${filterGap} ${filterMarginBottom}`}>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => handleFilterChange(category)}
              size={filterButtonSize}
            >
              {category}
            </FilterButton>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:grid-cols-4 md:gap-x-[23px] md:gap-y-[17px]">
        {displayPosts.map((post) => (
          <PostDetailCard
            key={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
            description={post.description}
            category={post.category}
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
