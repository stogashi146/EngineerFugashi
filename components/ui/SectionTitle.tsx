interface SectionTitleProps {
  title: string
  subtitle: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-[24px] text-left">
      <h2 className="font-noto text-[36px] font-bold leading-[normal] text-accent">{title}</h2>
      <p className="font-noto text-[16px] font-medium leading-[normal] text-black">{subtitle}</p>
    </div>
  )
}
