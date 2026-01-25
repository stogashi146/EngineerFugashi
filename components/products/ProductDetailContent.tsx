'use client'

import Badge from '@/components/ui/Badge'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import type { ProductDetail } from '@/types/product'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface ProductDetailContentProps {
  product: ProductDetail
  prevId?: string | null
  nextId?: string | null
}

export default function ProductDetailContent({
  product,
  prevId,
  nextId,
}: ProductDetailContentProps) {
  // バッジの生成
  const badges: Array<{ label: string; variant: 'primary' | 'secondary' }> =
    product.technologies.map((tech) => ({
      label: tech,
      variant: 'secondary' as const,
    }))

  // 画像配列（thumbnailと追加画像を結合）
  const images =
    product.images.length > 0 ? product.images.map((img) => img.url) : [product.thumbnail.url]

  return (
    <>
      {/* Hero Image Section */}
      <section className="bg-white pb-[16px] pt-[68px] md:pb-12 md:pt-24">
        <div className="mx-auto max-w-[1080px] px-[8px] md:px-[80px]">
          <div className="product-detail-swiper relative w-full">
            <Swiper
              modules={[Pagination, Navigation]}
              slidesPerView={2}
              centeredSlides={true}
              spaceBetween={12}
              slideToClickedSlide={true}
              loop={false}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet product-detail-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active product-detail-bullet-active',
              }}
              className="product-detail-slider w-full"
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={`${product.title} - ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <style jsx global>{`
          .product-detail-slider {
            aspect-ratio: 10/9;
          }
          .product-detail-swiper .swiper {
            overflow-x: clip;
            overflow-y: visible;
          }
          .product-detail-swiper .swiper-pagination {
            position: relative !important;
            bottom: auto !important;
            // margin-top: 12px;
          }
          .product-detail-swiper .swiper-slide:not(.swiper-slide-active) {
            opacity: 0.5;
          }
          .product-detail-swiper .swiper-slide-active {
            opacity: 1;
          }
          @media (min-width: 768px) {
            .product-detail-slider {
              aspect-ratio: 16/9;
            }
          }
          .product-detail-bullet {
            width: 6px !important;
            height: 6px !important;
            background: #d9d9d9 !important;
            opacity: 1 !important;
            margin: 0 4px !important;
          }
          .product-detail-bullet-active {
            background: #80999c !important;
          }
          .product-detail-swiper .swiper-slide {
            transition: opacity 0.3s ease;
            opacity: 1;
          }
          @media (min-width: 768px) {
            .product-detail-swiper .swiper-pagination {
              // margin-top: 16px;
            }
            .product-detail-bullet {
              width: 10px !important;
              height: 10px !important;
              margin: 0 6px !important;
            }
            .product-detail-swiper .swiper-slide:not(.swiper-slide-active) {
              opacity: 0.5;
            }
            .product-detail-swiper .swiper-slide-active {
              opacity: 1;
            }
          }
        `}</style>
      </section>

      {/* Product Details */}
      <section className="bg-white pb-[18px] md:pb-8">
        <div className="mx-auto max-w-[1080px] px-[17px] md:px-[120px]">
          {/* Title and Period */}
          <h1 className="mb-0 font-noto text-[20px] font-bold leading-[normal] text-accent md:mb-[16px] md:text-[36px]">
            {product.title}
          </h1>
          <p className="mb-[12px] font-noto-jp text-[12px] font-medium leading-[normal] text-[#373737] md:text-[16px]">
            リリース： {product.releaseDate}
          </p>

          {/* Badges */}
          <div className="mb-[16px] flex flex-wrap gap-[8px] md:gap-[16px]">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>

          {/* Overview */}
          {product.overview && (
            <p className="mb-[16px] whitespace-pre-wrap font-noto-jp text-[14px] font-medium leading-[normal] text-black md:text-[16px]">
              {product.overview}
            </p>
          )}

          {/* Contents (Rich Editor HTML) */}
          {product.contents && (
            <div
              className={`mb-[32px] font-noto-jp text-[14px] leading-[1.8] text-black md:mb-[16px] md:text-[16px] [&_a]:text-accent [&_a]:underline [&_h2]:mb-[2px] [&_h2]:mt-[12px] [&_h2]:text-[16px] [&_h2]:font-bold [&_h2]:text-accent md:[&_h2]:mb-[4px] md:[&_h2]:mt-[16px] md:[&_h2]:text-[24px] [&_h3]:mb-[2px] [&_h3]:mt-[16px] [&_h3]:text-[13px] [&_h3]:font-bold md:[&_h3]:mb-[4px] md:[&_h3]:mt-[24px] md:[&_h3]:text-[20px] [&_li]:mb-[2px] md:[&_li]:mb-[4px] [&_ol]:mb-[12px] [&_ol]:ml-[12px] [&_ol]:list-decimal [&_ol]:pl-[12px] md:[&_ol]:mb-[16px] md:[&_ol]:ml-[16px] md:[&_ol]:pl-[16px] [&_p]:py-[0.8rem] md:[&_p]:py-[0.8rem] [&_table]:my-[8px] [&_table]:ml-[8px] [&_table]:block [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-x-auto [&_table]:border [&_table]:border-gray-300 [&_table]:text-[10px] md:[&_table]:my-[8px] md:[&_table]:ml-[16px] md:[&_table]:table md:[&_table]:text-[14px] [&_td]:border [&_td]:border-gray-300 [&_td]:px-[8px] [&_td]:py-[6px] md:[&_td]:px-[12px] md:[&_td]:py-[8px] [&_th]:whitespace-nowrap [&_th]:border [&_th]:border-gray-300 [&_th]:bg-accent [&_th]:px-[8px] [&_th]:py-[6px] [&_th]:text-left [&_th]:font-bold [&_th]:text-white md:[&_th]:px-[12px] md:[&_th]:py-[8px] [&_tr:nth-child(even)]:bg-gray-50 [&_ul]:mb-[12px] [&_ul]:ml-[12px] [&_ul]:list-disc [&_ul]:pl-[12px] md:[&_ul]:mb-[16px] md:[&_ul]:ml-[16px] md:[&_ul]:pl-[16px]`}
              dangerouslySetInnerHTML={{ __html: product.contents }}
            />
          )}

          {/* Outputs */}
          {product.outputs.length > 0 && (
            <div className="mb-[40px] md:mb-[73px]">
              <h2 className="mb-[16px] font-noto text-[16px] font-bold leading-[normal] text-accent md:mb-[25px] md:text-[24px]">
                アウトプット
              </h2>
              <div className="grid grid-cols-2 gap-[12px] md:flex md:gap-[24px]">
                {product.outputs.map((output, index) => (
                  <a
                    key={index}
                    href={output.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[40px] w-full transform items-center justify-center rounded-[20px] border-2 border-accent px-[12px] py-[10px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-accent hover:text-white hover:shadow-md active:scale-95 md:w-[144px]"
                  >
                    <span className="font-noto text-[12px] font-bold text-accent hover:text-white md:text-[16px]">
                      {output.type}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-[80px] flex flex-col items-center justify-between gap-[16px] md:flex-row md:gap-0">
            {prevId ? (
              <Link
                href={`/products/${prevId}`}
                className="order-1 font-noto text-[18px] font-bold leading-[normal] text-accent underline md:order-1 md:text-[24px]"
              >
                &lt; PREV
              </Link>
            ) : (
              <span className="order-1 font-noto text-[18px] font-bold leading-[normal] text-gray-300 md:order-1 md:text-[24px]">
                &lt; PREV
              </span>
            )}
            <Link
              href="/products"
              className="order-3 flex h-[60px] w-full transform items-center justify-center rounded-[4px] border-2 border-accent px-[12px] py-[10px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-accent hover:text-white hover:shadow-md active:scale-95 md:order-2 md:h-[74px] md:w-[203px]"
            >
              <span className="font-noto text-[16px] font-bold text-accent md:text-[18px]">
                PRODUCTSに戻る
              </span>
            </Link>
            {nextId ? (
              <Link
                href={`/products/${nextId}`}
                className="order-2 font-noto text-[18px] font-bold leading-[normal] text-accent underline md:order-3 md:text-[24px]"
              >
                NEXT &gt;
              </Link>
            ) : (
              <span className="order-2 font-noto text-[18px] font-bold leading-[normal] text-gray-300 md:order-3 md:text-[24px]">
                NEXT &gt;
              </span>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
