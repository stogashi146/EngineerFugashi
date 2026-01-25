import SectionTitle from '../ui/SectionTitle'
import HistoryItem from './HistoryItem'

const histories = [
  {
    id: 1,
    company: 'エンジニアとしての基盤を築いた時期',
    period: '2014年',
    description: `Webアプリの運用保守・テストや、インフラ構築まで幅広く担当し、IT基盤とシステム運用の経験を積みました。
ネットワーク・サーバー構築、試験設計、不具合調査、顧客対応など現場に密着した業務を経験。
この期間に、後の開発業務につながる基礎技術とコミュニケーション力を身につけました。`,
  },
  {
    id: 2,
    company: 'プログラミングスクールに通う',
    period: '2020年',
    description: `前職ではシステム運用を経験しつつも、テストがメイン業務だったため、将来のキャリアを考えてプログラミングスクールに通うことにしました。
4ヶ月の期間でHTML、CSS、JavaScript、Ruby、Rails、AWSを学び、Webアプリケーションの開発を始めました。
`,
  },
  {
    id: 3,
    company: 'エンジニアデビュー',
    period: '2021年',
    description: `開発に携われることを条件に、SES企業をメインに転職活動をして無事にエンジニアデビューを果たす。
Ruby、Laravel、TypeScript、Next.js などモダンな技術を現場で活用しながら、開発スキルを磨いていきました。`,
  },
  {
    id: 4,
    company: 'フリーランスになる',
    period: '2025年',
    description: `業務で培った知識を活かしつつ、自分の視野で幅広い技術をキャッチアップしていきたいと考え、フリーランスになることを決意。
現在は、様々な案件でWebアプリケーションの開発を行い、エンジニアとしてのスキルを磨いています。`,
  },
]

export default function HistorySection() {
  return (
    <section className="bg-white py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1320px] px-[17px] md:px-[140px]">
        <div className="mb-[32px] md:mb-[57px]">
          <SectionTitle sectionType="h2" title="History" subtitle="経歴" />
        </div>

        <div className="relative border-l-[3px] border-accent pl-[45px] md:pl-[59px]">
          <div className="space-y-[16px] md:space-y-[33px]">
            {histories.map((history, index) => (
              <HistoryItem
                key={history.id}
                company={history.company}
                period={history.period}
                description={history.description}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
