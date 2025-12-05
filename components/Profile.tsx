import Image from 'next/image'
import SocialButton from './ui/SocialButton'
import Button from './ui/Button'

export default function Profile() {
  return (
    <section id="profile" className="bg-white pt-20">
      <div className="max-w-[1440px] mx-auto px-[240px] py-20">
        <div className="flex gap-[60px]">
          <div className="w-[285px] h-[400px] flex-shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={285}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pt-0">
            <h1 className="font-noto font-bold text-[36px] text-accent mb-2 leading-tight">Fugashi</h1>
            <p className="font-inter font-bold text-[18px] text-black mb-12 leading-tight">フルスタックエンジニア</p>

            <div className="font-noto-jp text-[16px] text-[#373737] leading-[30px] mb-[93px]">
              <p className="mb-0">フリーランスエンジニア</p>
              <p className="mb-0">IT業界で約10年、うち後半5年はWEBフルスタック開発に従事。</p>
              <p className="mb-0">バックエンドは Ruby・TypeScript、フロントは React を得意とし、直近では PM やテックリードも担当。</p>
              <p className="mb-0">現在は UI/UXや生成AI・LLM開発のスクールにも参加予定で、継続的にスキルアップを図っている。</p>
              <p className="mb-0">趣味は来年のマラソンに向けたランニング。</p>
            </div>

            <div className="flex gap-[8px] mb-[18px]">
              <SocialButton href="https://x.com">X</SocialButton>
              <SocialButton href="https://linkedin.com">LinkedIn</SocialButton>
              <SocialButton href="https://github.com">GitHub</SocialButton>
            </div>

            <Button href="#" variant="primary" size="medium">
              More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
