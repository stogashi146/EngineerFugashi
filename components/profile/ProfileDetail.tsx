import Image from 'next/image'
import SocialButton from '../ui/SocialButton'

export default function ProfileDetail() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-[240px]">
        <h1 className="font-noto font-bold text-[48px] text-accent text-center underline mb-20 leading-[normal]">
          PROFILE
        </h1>

        <div className="flex gap-[60px]">
          <div className="w-[333px] h-[467px] flex-shrink-0">
            <Image
              src="/images/profile-large.jpg"
              alt="Profile"
              width={333}
              height={467}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-noto font-bold text-[36px] text-accent mb-2 leading-tight">
              Fugashi
            </h2>
            <p className="font-inter font-bold text-[18px] text-black mb-12 leading-tight">
              フルスタックエンジニア
            </p>

            <div className="font-noto-jp text-[16px] text-black leading-[normal] mb-12">
              <p className="mb-0">フリーランスエンジニア</p>
              <p className="mb-0">IT業界で約10年、うち後半5年はWEBフルスタック開発に従事。</p>
              <p className="mb-0">バックエンドは Ruby・TypeScript、</p>
              <p className="mb-0">フロントは React を得意とし、</p>
              <p className="mb-0">直近では PM やテックリードも担当。</p>
              <p className="mb-0">現在は UI/UXや生成AI・LLM開発のスクールにも参加予定で、継続的にスキルアップを図っている。</p>
              <p className="mb-0">趣味は来年のマラソンに向けたランニング。</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">資格</p>
              <p className="mb-0">・CCNA（Cisco Certified Network Associate）</p>
              <p className="mb-0">・CCNP（Cisco Certified Network Professional）</p>
              <p className="mb-0">・Linux技術者認定資格／LinuC レベル3（304）</p>
              <p className="mb-0">・Oracle Master Silver 11g</p>
              <p className="mb-0">・HTML5プロフェッショナル認定試験レベル1</p>
              <p className="mb-0">・Ruby技術者認定試験3.0 Silver</p>
              <p className="mb-0">・AWS SAA（AWS Certified Solutions Architect - Associate）</p>
            </div>

            <div className="flex gap-8">
              <SocialButton href="https://x.com">X</SocialButton>
              <SocialButton href="https://linkedin.com">LinkedIn</SocialButton>
              <SocialButton href="https://github.com">GitHub</SocialButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
