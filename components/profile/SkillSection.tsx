import SectionTitle from '../ui/SectionTitle'
import SkillCard from './SkillCard'

const skills = [
  {
    id: 1,
    icon: '/images/icon-code.svg',
    title: 'WEBアプリケーション開発',
    description:
      'フルスタックエンジニアとして、要件定義から設計・実装・運用まで一貫した開発が可能です。Ruby、Laravel、TypeScript、Next.js、Python などを用いた API・フロント一体の開発を得意としており、機能追加から全体設計まで幅広く対応できます。',
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
      'LLM を活用した RAG（検索拡張生成）や AI エージェントによるチャットボット・社内文書検索システムの構築が可能です。ベクトルデータベースを用いた独自知識の組み込みや、複数ツールを連携させた自律型エージェントの開発など、実用的な AI ソリューションを提供します。',
  },
]

export default function SkillSection() {
  return (
    <section className="bg-main py-[50px] md:py-[66px]">
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
