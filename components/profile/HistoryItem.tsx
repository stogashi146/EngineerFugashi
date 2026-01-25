interface HistoryItemProps {
  company: string
  period: string
  description: string
  isFirst?: boolean
}

export default function HistoryItem({
  company,
  period,
  description,
  isFirst = false,
}: HistoryItemProps) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        className={`absolute -left-[56px] h-[20px] w-[20px] rounded-full bg-accent md:-left-[72px] md:h-[24px] md:w-[24px] ${isFirst ? 'top-[31px]' : 'top-[31px]'}`}
      />

      <div className="mb:w-[90%] relative rounded-[12px] border border-black bg-main p-[16px] md:p-6">
        <h4 className="font-noto text-[18px] font-bold leading-[normal] text-accent md:text-[24px]">
          {company}
        </h4>
        <p className="mb-[12px] font-noto-jp text-[14px] font-medium leading-[normal] text-[#373737] md:mb-2 md:text-[16px]">
          {period}
        </p>
        <p className="line-height-[150%] whitespace-pre-wrap font-noto-jp text-[12px] leading-[normal] text-[#373737] md:text-[14px]">
          {description}
        </p>
      </div>
    </div>
  )
}
