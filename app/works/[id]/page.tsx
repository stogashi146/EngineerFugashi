'use client'

import Header from '@/components/layout/Header'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// サンプルデータ
const workDetail = {
  id: 1,
  title: '入試採点システム 新規開発 PM兼開発',
  period: '2025年4月〜現在',
  images: ['/images/work-detail1.jpg', '/images/work-detail1.jpg', '/images/work-detail1.jpg'],
  badges: [
    { label: 'ClientWork', variant: 'primary' as const },
    { label: 'PM', variant: 'secondary' as const },
    { label: 'React', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
    { label: 'AWS', variant: 'secondary' as const },
  ],
  overview:
    'サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要',
  challenges:
    '説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる',
  languages:
    '説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる',
  outputs: [
    { label: 'URL', href: '#' },
    { label: 'AppStore', href: '#' },
    { label: 'GoogleStore', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
}

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      {/* Hero Image Section */}
      <section className="bg-white pb-[32px] pt-[68px] md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[222px]">
          <div
            className="work-detail-swiper relative w-full overflow-visible"
            style={{ aspectRatio: '990/521' }}
          >
            <Swiper
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              centeredSlides={false}
              spaceBetween={16}
              slideToClickedSlide={true}
              loop={false}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet work-detail-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active work-detail-bullet-active',
              }}
              className="h-full !overflow-visible"
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                },
              }}
            >
              {workDetail.images.map((image, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 rounded-lg border-[2px] border-black bg-[#505050] bg-opacity-30 md:border-[3px]"></div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg border-[2px] border-black md:border-[3px]">
                      <Image
                        src={image}
                        alt={`${workDetail.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <style jsx global>{`
          .work-detail-swiper .swiper-pagination {
            bottom: 12px !important;
            z-index: 10;
          }
          .work-detail-bullet {
            width: 16px !important;
            height: 16px !important;
            background: #d9d9d9 !important;
            opacity: 1 !important;
            margin: 0 8px !important;
          }
          .work-detail-bullet-active {
            background: #80999c !important;
          }
          .work-detail-swiper .swiper-slide {
            transition: opacity 0.3s ease;
            opacity: 1;
          }
          @media (min-width: 768px) {
            .work-detail-swiper .swiper-pagination {
              bottom: 21px !important;
            }
            .work-detail-bullet {
              width: 21px !important;
              height: 21px !important;
              margin: 0 17px !important;
            }
            .work-detail-swiper .swiper-slide:not(.swiper-slide-active) {
              opacity: 0.5;
            }
            .work-detail-swiper .swiper-slide-active {
              opacity: 1;
            }
          }
        `}</style>
      </section>

      {/* Work Details */}
      <section className="bg-white pb-[50px] md:pb-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[120px]">
          {/* Title and Period */}
          <h1 className="mb-[12px] font-noto text-[24px] font-bold leading-[normal] text-accent md:mb-[16px] md:text-[36px]">
            {workDetail.title}
          </h1>
          <p className="mb-[24px] font-noto-jp text-[14px] font-medium leading-[normal] text-[#373737] md:mb-[34px] md:text-[16px]">
            {workDetail.period}
          </p>

          {/* Badges */}
          <div className="mb-[40px] flex flex-wrap gap-[8px] md:mb-[73px] md:gap-[16px]">
            {workDetail.badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>

          {/* Overview */}
          <p className="mb-[32px] whitespace-pre-wrap font-noto-jp text-[14px] font-medium leading-[normal] text-black md:mb-[52px] md:text-[18px]">
            {workDetail.overview}
          </p>

          {/* Challenges */}
          <div className="mb-[32px] md:mb-[52px]">
            <h2 className="mb-[16px] font-noto text-[18px] font-bold leading-[normal] text-accent md:mb-[29px] md:text-[24px]">
              ■苦労したこと
            </h2>
            <p className="whitespace-pre-wrap font-noto-jp text-[14px] font-medium leading-[normal] text-black md:text-[18px]">
              {workDetail.challenges}
            </p>
          </div>

          {/* Languages */}
          <div className="mb-[32px] md:mb-[52px]">
            <h2 className="mb-[16px] font-noto text-[18px] font-bold leading-[normal] text-accent md:mb-[29px] md:text-[24px]">
              ■使用言語
            </h2>
            <p className="whitespace-pre-wrap font-noto-jp text-[14px] font-medium leading-[normal] text-black md:text-[18px]">
              {workDetail.languages}
            </p>
          </div>

          {/* Outputs */}
          <div className="mb-[40px] md:mb-[73px]">
            <h2 className="mb-[16px] font-noto text-[18px] font-bold leading-[normal] text-accent md:mb-[25px] md:text-[24px]">
              ■アウトプット
            </h2>
            <div className="grid grid-cols-2 gap-[12px] md:flex md:gap-[24px]">
              {workDetail.outputs.map((output, index) => (
                <a
                  key={index}
                  href={output.href}
                  className="flex h-[40px] w-full items-center justify-center rounded-[20px] border-2 border-accent px-[12px] py-[10px] transition hover:bg-accent hover:text-white md:w-[144px]"
                >
                  <span className="font-noto text-[14px] font-bold text-accent hover:text-white md:text-[16px]">
                    {output.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center justify-between gap-[16px] md:flex-row md:gap-0">
            <Link
              href="#"
              className="order-1 font-noto text-[18px] font-bold leading-[normal] text-accent underline md:order-1 md:text-[24px]"
            >
              &lt; PREV
            </Link>
            <Link
              href="/works"
              className="order-3 flex h-[60px] w-full items-center justify-center rounded-[4px] border-2 border-accent px-[12px] py-[10px] transition hover:bg-accent hover:text-white md:order-2 md:h-[74px] md:w-[203px]"
            >
              <span className="font-noto text-[16px] font-bold text-accent md:text-[18px]">
                WORKSに戻る
              </span>
            </Link>
            <Link
              href="#"
              className="order-2 font-noto text-[18px] font-bold leading-[normal] text-accent underline md:order-3 md:text-[24px]"
            >
              NEXT &gt;
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
