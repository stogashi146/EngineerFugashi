interface SectionTitleProps {
  sectionType: 'h1' | 'h2'
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle, sectionType = 'h1' }: SectionTitleProps) {
  if (sectionType === 'h1') {
    return (
      <div className="bg-white pb-[32px] pt-[68px] md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[240px]">
          <h1 className="text-center font-noto text-[36px] font-bold leading-[normal] text-accent underline md:text-[48px]">
            {title}
          </h1>
        </div>
      </div>
    )
  }
  return (
    <div className="mb-[24px] text-center">
      <h2 className="font-noto text-[36px] font-bold leading-[normal] text-accent">{title}</h2>
      {subtitle && (
        <p className="font-noto text-[16px] font-medium leading-[normal] text-black">{subtitle}</p>
      )}
    </div>
  )
}
