interface HistoryItemProps {
  company: string
  period: string
  description: string
}

export default function HistoryItem({ company, period, description }: HistoryItemProps) {
  return (
    <div className="bg-main border border-black rounded-[12px] p-6 h-[240px] relative">
      <h4 className="font-noto font-bold text-[24px] text-accent leading-[normal] mb-3">
        {company}
      </h4>
      <p className="font-noto-jp font-medium text-[16px] text-[#373737] leading-[normal] mb-4">
        {period}
      </p>
      <p className="font-noto-jp font-medium text-[16px] text-[#373737] leading-[normal]">
        {description}
      </p>
    </div>
  )
}
