import Image from 'next/image'

interface SkillCardProps {
  icon: string
  title: string
  description: string
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-white border border-black rounded-[12px] p-6 h-[193px] relative">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-[40px] h-[40px] flex-shrink-0">
          <Image src={icon} alt={title} width={40} height={40} className="w-full h-full" />
        </div>
        <h4 className="font-noto font-bold text-[20px] text-black leading-[normal]">
          {title}
        </h4>
      </div>
      <p className="font-noto-jp font-medium text-[14px] text-black leading-[normal]">
        {description}
      </p>
    </div>
  )
}
