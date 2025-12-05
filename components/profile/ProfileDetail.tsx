import Image from 'next/image'
import SocialButton from '../ui/SocialButton'

export default function ProfileDetail() {
  return (
    <section className="bg-white pb-[50px] pt-[68px] md:pb-20 md:pt-20">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[80px] xl:px-[240px]">
        <h1 className="mb-[32px] text-center font-noto text-[36px] font-bold leading-[normal] text-accent underline md:mb-20 md:text-[48px]">
          PROFILE
        </h1>

        <div className="flex flex-col gap-[12px] md:flex-row md:gap-[50px]">
          <div className="relative w-full md:w-[80%] md:flex-1" style={{ aspectRatio: '391/391' }}>
            <Image
              src="/images/profile-large.jpg"
              alt="Profile"
              fill
              className="rounded-[12px] object-cover md:h-full md:w-full"
            />
          </div>

          <div className="flex-1">
            <h2 className="mb-2 font-noto text-[28px] font-bold leading-tight text-accent md:text-[36px]">
              Fugashi
            </h2>
            <p className="mb-[30px] font-inter text-[16px] font-bold leading-tight text-black md:mb-12 md:text-[18px]">
              フルスタックエンジニア
            </p>

            <div className="mb-[30px] font-noto-jp text-[14px] leading-[normal] text-black md:mb-12 md:text-[16px]">
              <p className="mb-0">フリーランスエンジニア</p>
              <p className="mb-0">IT業界で約10年、うち後半5年はWEBフルスタック開発に従事。</p>
              <p className="mb-0">バックエンドは Ruby・TypeScript、</p>
              <p className="mb-0">フロントは React を得意とし、</p>
              <p className="mb-0">直近では PM やテックリードも担当。</p>
              <p className="mb-0">
                現在は
                UI/UXや生成AI・LLM開発のスクールにも参加予定で、継続的にスキルアップを図っている。
              </p>
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

            <div className="flex justify-center gap-[8px] md:justify-start md:gap-8">
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
