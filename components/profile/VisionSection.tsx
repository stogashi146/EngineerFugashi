import Image from 'next/image'
import SectionTitle from '../ui/SectionTitle'

export default function VisionSection() {
  return (
    <section className="bg-main py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1320px] px-[17px] md:px-[140px]">
        <div className="mb-[32px] md:mb-[57px]">
          <SectionTitle sectionType="h2" title="VISION" subtitle="将来像" />
        </div>

        <div className="rounded-[12px] bg-white p-[16px] md:p-12">
          <h3 className="mb-[16px] text-center font-noto text-[18px] font-bold leading-[normal] text-accent md:mb-8 md:text-[24px]">
            何々をして何々を実現する
          </h3>

          <div className="mb-0">
            <div className="flex">
              <p className="mb-[12px] font-noto-jp text-[12px] font-medium leading-[normal] text-[#373737] md:mb-6 md:text-[16px]">
                何々が何々だから、何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから
              </p>
              <div className="aspect-[302/175] rounded-lg border-[2px] border-black md:border-[3px]">
                <Image src="/images/vision1.jpg" alt="Vision 1" fill className="object-cover" />
              </div>
            </div>

            <div className="flex">
              <div className="mb-[12px] aspect-[302/175] rounded-lg border-[2px] border-black md:mb-6 md:border-[3px]">
                <Image src="/images/vision2.jpg" alt="Vision 2" fill className="object-cover" />
              </div>
              <p className="font-noto-jp text-[12px] font-medium leading-[normal] text-[#373737] md:text-[16px]">
                何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
