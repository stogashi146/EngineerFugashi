import WorkCard from './WorkCard'
import SectionTitle from './ui/SectionTitle'
import FilterButton from './ui/FilterButton'
import Button from './ui/Button'

const works = [
  {
    id: 1,
    imageUrl: '/images/work1.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発'
  },
  {
    id: 2,
    imageUrl: '/images/work2.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発'
  },
  {
    id: 3,
    imageUrl: '/images/work3.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発'
  },
  {
    id: 4,
    imageUrl: '/images/work4.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発'
  },
  {
    id: 5,
    imageUrl: '/images/work5.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発'
  },
  {
    id: 6,
    imageUrl: '/images/work6.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発'
  },
  {
    id: 7,
    imageUrl: '/images/work1.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発'
  },
  {
    id: 8,
    imageUrl: '/images/work2.jpg',
    title: '教育 | 2025年4月〜現在',
    description: '入試採点システム 新規開発 PM兼開発'
  }
]

export default function Works() {
  return (
    <section id="works" className="bg-main py-[86px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="mb-[57px]">
          <SectionTitle title="WORKS" subtitle="制作実績" />
        </div>

        <div className="flex gap-[23px] mb-[56px]">
          <FilterButton active>All</FilterButton>
          <FilterButton>ClientWork</FilterButton>
          <FilterButton>Original</FilterButton>
        </div>

        <div className="grid grid-cols-4 gap-x-[24px] gap-y-[23px] mb-[32px]">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              imageUrl={work.imageUrl}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <Button href="#" variant="primary" size="medium">
            More
          </Button>
        </div>
      </div>
    </section>
  )
}
