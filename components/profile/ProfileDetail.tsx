import Image from 'next/image'
import SocialButton from '../ui/SocialButton'
import SectionTitle from '../ui/SectionTitle'

export default function ProfileDetail() {
  return (
    <section id="profile" className="bg-white">
      <div className="md:pb-12３ mx-auto max-w-[1440px] px-[17px] md:px-[80px] xl:px-[240px]">
        <div className="flex flex-col gap-[12px] md:flex-row md:gap-[36px]">
          {/* Mobile Image */}
          <div
            className="relative w-full flex-shrink-0 md:hidden"
            style={{ aspectRatio: '407/407' }}
          >
            <Image src="/images/profile-sp.jpg" alt="Profile" fill className="object-cover" />
          </div>
          {/* Desktop Image */}
          <div className="relative hidden w-[80%] flex-1 self-stretch md:block">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={1100}
              height={900}
              className="ml-auto mr-[2rem] h-[540px] w-[400px] rounded-[12px] object-cover"
            />
          </div>
          <div className="flex-1 pt-0">
            <h1 className="mb-2 font-noto text-[36px] font-bold leading-tight text-accent">
              Fugashi
            </h1>
            <p className="mb-[16px] font-inter text-[22px] font-bold leading-[30px] text-black md:text-[18px]">
              フルスタックエンジニア
            </p>

            <div className="mb-[24px] font-noto-jp text-[16px] leading-[30px] text-[#373737] md:mb-[24px]">
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
              <p className="mb-0">
                ・CCNA（Cisco Certified Network Associate）
                <br />
                ・CCNP（Cisco Certified Network Professional）
                <br />
                ・Linux技術者認定資格／LinuC レベル3（304）
                <br />
                ・Oracle Master Silver 11g
                <br />
                ・HTML5プロフェッショナル認定試験レベル1
                <br />
                ・Ruby技術者認定試験3.0 Silver
                <br />
                ・AWS SAA（AWS Certified Solutions Architect - Associate）
              </p>
            </div>

            <div className="mb-[16px] flex justify-center gap-[8px] md:justify-evenly md:gap-[8px]">
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
