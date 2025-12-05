'use client'

import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
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
  images: [
    '/images/work-detail1.jpg',
    '/images/work-detail1.jpg',
    '/images/work-detail1.jpg'
  ],
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
    { label: 'AWS', variant: 'secondary' as const }
  ],
  overview: 'サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要サービス概要',
  challenges: '説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる',
  languages: '説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる説明がはいる',
  outputs: [
    { label: 'URL', href: '#' },
    { label: 'AppStore', href: '#' },
    { label: 'GoogleStore', href: '#' },
    { label: 'GitHub', href: '#' }
  ]
}

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="bg-white w-full min-h-screen">
      <Header />

      {/* Hero Image Section */}
      <section className="bg-white pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto px-[222px]">
          <div className="relative w-full work-detail-swiper overflow-visible" style={{ aspectRatio: '990/521' }}>
            <Swiper
              modules={[Pagination, Navigation]}
              slidesPerView={1.5}
              centeredSlides={false}
              spaceBetween={30}
              slideToClickedSlide={true}
              loop={false}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet work-detail-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active work-detail-bullet-active'
              }}
              className="h-full !overflow-visible"
            >
              {workDetail.images.map((image, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-[#505050] bg-opacity-30 rounded-lg border-[3px] border-black"></div>
                    <div className="relative w-full h-full rounded-lg border-[3px] border-black overflow-hidden">
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
            bottom: 21px !important;
            z-index: 10;
          }
          .work-detail-bullet {
            width: 21px !important;
            height: 21px !important;
            background: #D9D9D9 !important;
            opacity: 1 !important;
            margin: 0 17px !important;
          }
          .work-detail-bullet-active {
            background: #80999C !important;
          }
          .work-detail-swiper .swiper-slide {
            transition: opacity 0.3s ease;
          }
          .work-detail-swiper .swiper-slide:not(.swiper-slide-active) {
            opacity: 0.5;
          }
          .work-detail-swiper .swiper-slide-active {
            opacity: 1;
          }
        `}</style>
      </section>

      {/* Work Details */}
      <section className="bg-white pb-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          {/* Title and Period */}
          <h1 className="font-noto font-bold text-[36px] text-accent leading-[normal] mb-[16px]">
            {workDetail.title}
          </h1>
          <p className="font-noto-jp font-medium text-[16px] text-[#373737] leading-[normal] mb-[34px]">
            {workDetail.period}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-[16px] mb-[73px]">
            {workDetail.badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>

          {/* Overview */}
          <p className="font-noto-jp font-medium text-[18px] text-black leading-[normal] mb-[52px] whitespace-pre-wrap">
            {workDetail.overview}
          </p>

          {/* Challenges */}
          <div className="mb-[52px]">
            <h2 className="font-noto font-bold text-[24px] text-accent leading-[normal] mb-[29px]">
              ■苦労したこと
            </h2>
            <p className="font-noto-jp font-medium text-[18px] text-black leading-[normal] whitespace-pre-wrap">
              {workDetail.challenges}
            </p>
          </div>

          {/* Languages */}
          <div className="mb-[52px]">
            <h2 className="font-noto font-bold text-[24px] text-accent leading-[normal] mb-[29px]">
              ■使用言語
            </h2>
            <p className="font-noto-jp font-medium text-[18px] text-black leading-[normal] whitespace-pre-wrap">
              {workDetail.languages}
            </p>
          </div>

          {/* Outputs */}
          <div className="mb-[73px]">
            <h2 className="font-noto font-bold text-[24px] text-accent leading-[normal] mb-[25px]">
              ■アウトプット
            </h2>
            <div className="flex gap-[24px]">
              {workDetail.outputs.map((output, index) => (
                <a
                  key={index}
                  href={output.href}
                  className="border-2 border-accent rounded-[20px] px-[12px] py-[10px] h-[40px] w-[144px] flex items-center justify-center hover:bg-accent hover:text-white transition"
                >
                  <span className="font-noto font-bold text-[16px] text-accent hover:text-white">
                    {output.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link href="#" className="font-noto font-bold text-[24px] text-accent underline leading-[normal]">
              &lt; PREV
            </Link>
            <Link
              href="/works"
              className="border-2 border-accent rounded-[4px] px-[12px] py-[10px] h-[74px] w-[203px] flex items-center justify-center hover:bg-accent hover:text-white transition"
            >
              <span className="font-noto font-bold text-[18px] text-accent">
                WORKSに戻る
              </span>
            </Link>
            <Link href="#" className="font-noto font-bold text-[24px] text-accent underline leading-[normal]">
              NEXT &gt;
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
