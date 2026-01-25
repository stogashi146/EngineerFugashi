'use client'

import { useState } from 'react'
import FilterButton from '../ui/FilterButton'
import ProductDetailCard from './ProductDetailCard'
import Pagination from '../ui/Pagination'
import type { Product } from '@/types/product'

interface ProductsFilteredGridProps {
  products: Product[]
  showFilters?: boolean
  maxItems?: number
  showBadges?: boolean
  filterButtonSize?: 'small' | 'medium'
  filterGap?: string
  filterMarginBottom?: string
  showPagination?: boolean
  itemsPerPage?: number
}

export default function ProductsFilteredGrid({
  products,
  showFilters = true,
  showBadges = true,
  maxItems,
  filterButtonSize = 'medium',
  filterGap = 'gap-[12px] md:gap-[19px]',
  filterMarginBottom = 'mb-[32px] md:mb-[44px]',
  showPagination = false,
  itemsPerPage = 8,
}: ProductsFilteredGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((product) => product.category.includes(activeFilter as 'Web' | 'Game' | 'Mobile'))

  // ページネーションの計算
  const totalPages = showPagination ? Math.ceil(filteredProducts.length / itemsPerPage) : 1
  const startIndex = showPagination ? (currentPage - 1) * itemsPerPage : 0
  const endIndex = showPagination ? startIndex + itemsPerPage : filteredProducts.length

  const displayProducts = maxItems
    ? filteredProducts.slice(0, maxItems)
    : filteredProducts.slice(startIndex, endIndex)

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
            active={activeFilter === 'Web'}
            onClick={() => handleFilterChange('Web')}
            size={filterButtonSize}
          >
            Web
          </FilterButton>
          <FilterButton
            active={activeFilter === 'Game'}
            onClick={() => handleFilterChange('Game')}
            size={filterButtonSize}
          >
            Game
          </FilterButton>
          <FilterButton
            active={activeFilter === 'Mobile'}
            onClick={() => handleFilterChange('Mobile')}
            size={filterButtonSize}
          >
            Mobile
          </FilterButton>
        </div>
      )}

      <div className={showPagination ? 'min-h-[600px] md:min-h-[700px]' : ''}>
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:grid-cols-4 md:gap-x-[24px] md:gap-y-[17px]">
            {displayProducts.map((product) => (
              <ProductDetailCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                category={product.category}
                releaseDate={product.releaseDate}
                title={product.title}
                badges={showBadges ? product.badges : []}
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
