import Image from 'next/image'
import SectionTitle from '../ui/SectionTitle'
import HistoryItem from './HistoryItem'

const histories = [
  {
    id: 1,
    company: 'AAA会社名',
    period: '2014年04月〜2020年3月',
    description:
      'この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。',
  },
  {
    id: 2,
    company: 'BBB会社名',
    period: '2020年04月〜2023年12月',
    description:
      'この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。',
  },
  {
    id: 3,
    company: 'フリーランス',
    period: '2024年01月〜現在',
    description:
      'この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。この会社では〜〜をしました。',
  },
]

export default function HistorySection() {
  return (
    <section className="bg-white py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[120px]">
        <div className="mb-[32px] md:mb-[57px]">
          <SectionTitle title="History" subtitle="経歴" />
        </div>

        <div className="relative pl-[45px] md:pl-[69px]">
          <div className="absolute left-0 top-[21px] h-[570px] w-[30px] md:h-[570px] md:w-[40px]">
            <Image
              src="/images/timeline.svg"
              alt="Timeline"
              width={40}
              height={570}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-[16px] md:space-y-[33px]">
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
