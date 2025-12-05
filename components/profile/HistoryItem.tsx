interface HistoryItemProps {
  company: string
  period: string
  description: string
}

export default function HistoryItem({ company, period, description }: HistoryItemProps) {
  return (
    <div className="relative min-h-[180px] rounded-[12px] border border-black bg-main p-[16px] md:h-[240px] md:p-6">
      <h4 className="mb-[8px] font-noto text-[18px] font-bold leading-[normal] text-accent md:mb-3 md:text-[24px]">
        {company}
      </h4>
      <p className="mb-[12px] font-noto-jp text-[14px] font-medium leading-[normal] text-[#373737] md:mb-4 md:text-[16px]">
        {period}
      </p>
      <p className="font-noto-jp text-[12px] font-medium leading-[normal] text-[#373737] md:text-[16px]">
        {description}
      </p>
    </div>
  )
}
