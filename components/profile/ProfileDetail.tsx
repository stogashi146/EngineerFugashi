import Image from 'next/image'
import SocialButton from '../ui/SocialButton'
import SectionTitle from '../ui/SectionTitle'
import { BLOG_URL, GITHUB_URL, X_URL } from '@/data/constants'

export default function ProfileDetail() {
  return (
    <section id="profile" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[80px] md:pb-12 xl:px-[240px]">
        <div className="flex flex-col gap-[12px] md:flex-row md:gap-[36px]">
          {/* Mobile Image */}
          <div
            className="relative w-full flex-shrink-0 md:hidden"
            style={{ aspectRatio: '407/407' }}
          >
            <Image src="/images/profile-sp.png" alt="Profile" fill className="object-cover" />
          </div>
          {/* Desktop Image */}
          <div className="relative hidden w-[80%] flex-1 self-stretch md:block">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={1100}
              height={900}
              className="ml-auto mr-[2rem] h-[540px] w-[400px] rounded-[12px] object-cover"
            />
          </div>
          <div className="flex-1 pt-0">
            <h1 className="mb-1 font-noto text-[36px] font-bold leading-tight text-accent">
              Fugashi
            </h1>
            <p className="mb-[8px] font-inter text-[22px] font-bold leading-[30px] text-black md:text-[18px]">
              フリーランス / フルスタックエンジニア
            </p>

            <div className="mb-[24px] font-noto-jp text-[16px] leading-[30px] text-[#373737] md:mb-[24px]">
              <p className="mb-4 leading-[1.6em]">
                IT業界で約10年、うち後半5年はWEBフルスタック開発に従事。
                <br />
                バックエンドは Ruby・TypeScript、 フロントは React を得意とし、 直近では PM
                やテックリードも担当。 <br />
                現在はUI/UXや生成AI・LLM開発のスクールにも参加予定で、継続的にスキルアップを図っている。
                <br />
                趣味は来年のマラソンに向けたランニング。 &nbsp;
              </p>
              <p className="mb-0">資格</p>
              <p className="mb-0 leading-[normal]">
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

            <div className="mb-[24px] mr-auto flex gap-[12px] md:gap-[px]">
              <SocialButton href={X_URL}>X</SocialButton>
              <SocialButton href={BLOG_URL}>Blog</SocialButton>
              <SocialButton href={GITHUB_URL}>GitHub</SocialButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
