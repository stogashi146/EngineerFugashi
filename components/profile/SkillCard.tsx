import Image from 'next/image'

interface SkillCardProps {
  icon: string
  title: string
  description: string
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="relative min-h-[193px] rounded-[12px] border border-black bg-white p-[16px] md:p-6">
      <div className="mb-[12px] flex items-start gap-[12px] md:mb-4 md:gap-4">
        <div className="h-[32px] w-[32px] flex-shrink-0 md:h-[40px] md:w-[40px]">
          <Image src={icon} alt={title} width={40} height={40} className="h-full w-full" />
        </div>
        <h4 className="font-noto text-[16px] font-bold leading-[normal] text-black md:text-[20px]">
          {title}
        </h4>
      </div>
      <p className="font-noto-jp text-[12px] font-medium leading-[normal] text-black md:text-[14px]">
        {description}
      </p>
    </div>
  )
}
