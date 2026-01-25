'use client'

import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import ProductsFilteredGrid from '../products/ProductsFilteredGrid'
import type { Product } from '@/types/product'

interface ProductsProps {
  products: Product[]
}

export default function Products({ products }: ProductsProps) {
  return (
    <section id="products" className="bg-main py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[40px] xl:px-[160px]">
        <div className="mb-[16px] md:mb-[16px]">
          <SectionTitle sectionType="h2" title="PRODUCTS" subtitle="制作実績" />
        </div>

        <ProductsFilteredGrid
          products={products}
          showFilters={true}
          showBadges={false}
          maxItems={4}
          filterButtonSize="small"
          filterGap="gap-[6px] md:gap-[11px]"
          filterMarginBottom="mb-[16px] md:mb-[16px]"
        />

        <div className="mt-[28px] flex justify-end md:mt-[32px] md:justify-end">
          <Button href="/products" variant="outline" size="medium">
            More
          </Button>
        </div>
      </div>
    </section>
  )
}
