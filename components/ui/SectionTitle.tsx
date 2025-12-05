interface SectionTitleProps {
  title: string
  subtitle: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="font-noto font-bold text-[36px] text-accent leading-[normal]">{title}</h2>
      <p className="font-noto font-medium text-[16px] text-black leading-[normal]">{subtitle}</p>
    </div>
  )
}
