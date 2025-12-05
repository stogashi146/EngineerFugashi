import SectionTitle from '../ui/SectionTitle'
import SkillCard from './SkillCard'

const skills = [
  {
    id: 1,
    icon: '/images/icon-code.svg',
    title: 'WEBアプリケーション開発',
    description:
      'フルスタックでのWEBアプリケーションの開発ができます。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。',
  },
  {
    id: 2,
    icon: '/images/icon-design.svg',
    title: 'UIUXデザイン',
    description:
      'UIUXデザインができます。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。',
  },
  {
    id: 3,
    icon: '/images/icon-mobile.svg',
    title: 'スマホアプリ開発',
    description:
      'スマホアプリ開発ができます。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。',
  },
  {
    id: 4,
    icon: '/images/icon-ai.svg',
    title: 'AIエージェント開発',
    description:
      'AIエージェント開発ができます。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。その他備考を記載する。',
  },
]

export default function SkillSection() {
  return (
    <section className="bg-main py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[120px]">
        <div className="mb-[32px] md:mb-[57px]">
          <SectionTitle title="SKILL" subtitle="制作実績" />
        </div>

        <div className="grid grid-cols-1 gap-x-[16px] gap-y-[16px] md:grid-cols-2 md:gap-x-[29px]">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
