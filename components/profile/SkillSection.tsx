import SectionTitle from '../ui/SectionTitle'
import SkillCard from './SkillCard'

const skills = [
  {
    id: 1,
    icon: '/images/icon-code.svg',
    title: 'WEBアプリケーション開発',
    description:
      'フルスタックエンジニアとして、要件定義から設計・実装・運用まで一貫した開発が可能です。Ruby、Laravel、TypeScript、Next.js などを用いた API・フロント一体の開発を得意としており、機能追加から全体設計まで幅広く対応できます。',
  },
  {
    id: 2,
    icon: '/images/icon-design.svg',
    title: 'UIUXデザイン',
    description:
      '情報設計・ワイヤーフレーム作成・プロトタイピングなど、ユーザー体験を重視したデザイン制作が可能です。Figma を用いて、ユーザーフローの整理からビジュアル設計まで、開発と並行して体験の質を高めるデザインを行います。',
  },
  {
    id: 3,
    icon: '/images/icon-mobile.svg',
    title: 'スマホアプリ開発',
    description:
      'React Native や Unity を活用したスマホアプリ・ゲーム制作に対応できます。UI構築からロジック実装、アニメーション演出まで一連の工程を行い、汎用的なアプリからインタラクション性の高いコンテンツまで制作可能です。',
  },
  {
    id: 4,
    icon: '/images/icon-ai.svg',
    title: 'AIエージェント開発',
    description:
      'AI を活用したエージェント開発を学習中です。LLM の活用や自動化ワークフロー構築など、今後のプロダクト開発に活かせる領域に取り組んでおり、技術の幅をさらに広げていく予定です。',
  },
]

export default function SkillSection() {
  return (
    <section className="bg-main py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1440px] px-[17px] lg:px-[80px] xl:px-[240px]">
        <div className="mb-[32px] md:mb-[57px]">
          <SectionTitle sectionType="h2" title="SKILL" subtitle="できること" />
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
