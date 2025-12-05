import Image from 'next/image'
import SocialButton from '../ui/SocialButton'
import Button from '../ui/Button'

export default function Profile() {
  return (
    <section id="profile" className="bg-white pt-[68px] md:pt-20">
      <div className="mx-auto max-w-[1440px] px-[17px] py-10 md:px-[80px] md:py-14 xl:px-[240px]">
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
              className="ml-auto mr-[2rem] h-[450px] w-[330px] rounded-[12px] object-cover"
            />
          </div>
          <div className="flex-1 pt-0">
            <h1 className="mb-2 font-noto text-[36px] font-bold leading-tight text-accent">
              Fugashi
            </h1>
            <p className="mb-[16px] font-inter text-[22px] font-bold leading-[30px] text-black md:text-[18px]">
              フルスタックエンジニア
            </p>

            <div className="mb-[63px] font-noto-jp text-[16px] leading-[30px] text-[#373737] md:mb-[63px]">
              <p className="mb-0">フリーランスエンジニア</p>
              <p className="mb-0">IT業界で約10年、うち後半5年はWEBフルスタック開発に従事。</p>
              <p className="mb-0">
                バックエンドは Ruby・TypeScript、フロントは React を得意とし、直近では PM
                やテックリードも担当。
              </p>
              <p className="mb-0">
                現在は
                UI/UXや生成AI・LLM開発のスクールにも参加予定で、継続的にスキルアップを図っている。
              </p>
              <p className="mb-0">趣味は来年のマラソンに向けたランニング。</p>
            </div>

            <div className="mb-[16px] flex justify-center gap-[8px] md:justify-start md:gap-[8px]">
              <SocialButton href="https://x.com">X</SocialButton>
              <SocialButton href="https://linkedin.com">LinkedIn</SocialButton>
              <SocialButton href="https://github.com">GitHub</SocialButton>
            </div>

            <div className="flex justify-center text-right md:block">
              <Button href="#" variant="primary" size="medium">
                More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
