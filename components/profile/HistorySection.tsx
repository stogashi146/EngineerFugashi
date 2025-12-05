import Image from 'next/image'
import SectionTitle from '../ui/SectionTitle'
import HistoryItem from './HistoryItem'

const histories = [
  {
    id: 1,
    company: 'AAA会社名',
    period: '2014年04月〜2020年3月',
    description: 'この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。'
  },
  {
    id: 2,
    company: 'BBB会社名',
    period: '2020年04月〜2023年12月',
    description: 'この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。'
  },
  {
    id: 3,
    company: 'フリーランス',
    period: '2024年01月〜現在',
    description: 'この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。'
  }
]

export default function HistorySection() {
  return (
    <section className="bg-white py-[86px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="mb-[57px]">
          <SectionTitle title="History" subtitle="経歴" />
        </div>

        <div className="relative pl-[69px]">
          <div className="absolute left-0 top-[21px] w-[40px] h-[570px]">
            <Image src="/images/timeline.svg" alt="Timeline" width={40} height={570} />
          </div>

          <div className="space-y-[33px]">
            {histories.map((history) => (
              <HistoryItem
                key={history.id}
                company={history.company}
                period={history.period}
                description={history.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
