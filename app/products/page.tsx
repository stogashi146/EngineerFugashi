import Contact from '@/components/layout/Contact'
import ProductsFilteredGrid from '@/components/products/ProductsFilteredGrid'
import { getProducts } from '@/lib/microcms'

export default async function ProductsPage() {
  const { products } = await getProducts()

  return (
    <>
      {/* PRODUCTS Title */}
      <div className="bg-white pb-[32px] pt-[68px] md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[240px]">
          <h1 className="text-center font-noto text-[36px] font-bold leading-[normal] text-accent underline md:text-[48px]">
            PRODUCTS
          </h1>
        </div>
      </div>

      {/* Products List */}
      <section className="bg-white pb-[50px] md:pb-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[20px] lg:px-[240px]">
          <ProductsFilteredGrid
            products={products}
            showFilters={true}
            showPagination={true}
            itemsPerPage={8}
            filterButtonSize="small"
          />
        </div>
      </section>

      <Contact />
    </>
  )
}
