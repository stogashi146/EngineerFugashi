import Image from 'next/image'
import SectionTitle from '../ui/SectionTitle'

export default function VisionSection() {
  return (
    <section className="bg-main py-[86px]">
      <div className="max-w-[1440px] mx-auto px-[240px]">
        <div className="mb-[57px]">
          <SectionTitle title="VISION" subtitle="将来像" />
        </div>

        <div className="bg-white rounded-[12px] p-12">
          <h3 className="font-noto font-bold text-[24px] text-accent text-center leading-[normal] mb-8">
            何々をして何々を実現する
          </h3>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="font-noto-jp font-medium text-[16px] text-[#373737] leading-[normal] mb-6">
                何々が何々だから、何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから何々が何々だから
              </p>
              <div className="aspect-[302/175] relative rounded-lg overflow-hidden border-[3px] border-black">
                <Image
                  src="/images/vision1.jpg"
                  alt="Vision 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="aspect-[302/175] relative rounded-lg overflow-hidden border-[3px] border-black mb-6">
                <Image
                  src="/images/vision2.jpg"
                  alt="Vision 2"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-noto-jp font-medium text-[16px] text-[#373737] leading-[normal]">
                何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい何々していきたい
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
