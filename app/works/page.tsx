import Header from '@/components/layout/Header'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import FilterButton from '@/components/ui/FilterButton'
import WorkDetailCard from '@/components/works/WorkDetailCard'
import Pagination from '@/components/ui/Pagination'

const works = [
  {
    id: 1,
    imageUrl: '/images/work1.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 2,
    imageUrl: '/images/work2.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'Original', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
    ],
  },
  {
    id: 3,
    imageUrl: '/images/work3.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 4,
    imageUrl: '/images/work4.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 5,
    imageUrl: '/images/work5.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 6,
    imageUrl: '/images/work6.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 7,
    imageUrl: '/images/work1.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 8,
    imageUrl: '/images/work2.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
]

export default function WorksPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header />

      {/* WORKS Title */}
      <section className="bg-white pb-[32px] pt-[68px] md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[240px]">
          <h1 className="text-center font-noto text-[36px] font-bold leading-[normal] text-accent underline md:text-[48px]">
            WORKS
          </h1>
        </div>
      </section>

      {/* Works List */}
      <section className="bg-white pb-[50px] md:pb-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[20px] lg:px-[240px]">
          <div className="mb-[32px] flex gap-[12px] md:mb-[44px] md:gap-[19px]">
            <FilterButton active>All</FilterButton>
            <FilterButton>ClientWork</FilterButton>
            <FilterButton>Original</FilterButton>
          </div>

          <div className="mb-[32px] grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:mb-[40px] md:grid-cols-4 md:gap-x-[24px] md:gap-y-[17px]">
            {works.map((work) => (
              <WorkDetailCard
                key={work.id}
                id={work.id}
                imageUrl={work.imageUrl}
                category={work.category}
                period={work.period}
                title={work.title}
                badges={work.badges}
              />
            ))}
          </div>

          <Pagination currentPage={1} totalPages={9} />
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
