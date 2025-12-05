import WorkCard from './WorkCard'
import SectionTitle from '../ui/SectionTitle'
import FilterButton from '../ui/FilterButton'
import Button from '../ui/Button'

const works = [
  {
    id: 1,
    imageUrl: '/images/work1.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発',
  },
  {
    id: 2,
    imageUrl: '/images/work2.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発',
  },
  {
    id: 3,
    imageUrl: '/images/work3.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発',
  },
  {
    id: 4,
    imageUrl: '/images/work4.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発',
  },
  {
    id: 5,
    imageUrl: '/images/work5.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発',
  },
  {
    id: 6,
    imageUrl: '/images/work6.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発',
  },
  {
    id: 7,
    imageUrl: '/images/work1.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発',
  },
  {
    id: 8,
    imageUrl: '/images/work2.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発',
  },
]

export default function Works() {
  return (
    <section id="works" className="bg-main py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[30px] xl:px-[140px]">
        <div>
          <SectionTitle title="WORKS" subtitle="制作実績" />
        </div>

        <div className="mb-[16px] flex gap-[6px] md:mb-[16px] md:gap-[11px]">
          <FilterButton active>All</FilterButton>
          <FilterButton>ClientWork</FilterButton>
          <FilterButton>Original</FilterButton>
        </div>

        <div className="mb-[28px] grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:mb-[32px] md:grid-cols-4 md:gap-x-[24px] md:gap-y-[23px]">
          {works.slice(0, 4).map((work) => (
            <WorkCard
              key={work.id}
              imageUrl={work.imageUrl}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>

        <div className="flex justify-center md:justify-end">
          <Button href="#" variant="primary" size="medium">
            More
          </Button>
        </div>
      </div>
    </section>
  )
}
