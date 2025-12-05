import Image from 'next/image'
import Link from 'next/link'
import Badge from '../ui/Badge'

interface WorkDetailCardProps {
  id: number
  imageUrl: string
  category: string
  period: string
  title: string
  badges: Array<{ label: string; variant?: 'primary' | 'secondary' }>
}

export default function WorkDetailCard({ id, imageUrl, category, period, title, badges }: WorkDetailCardProps) {
  return (
    <Link href={`/works/${id}`} className="block group">
      <div className="border-[3px] border-black rounded-lg overflow-hidden mb-[12px] relative bg-[#505050] bg-opacity-30" style={{ aspectRatio: '235/236' }}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="font-noto-jp font-medium text-[14px] text-black leading-[normal] mb-[8px]">
        <p className="mb-0">{category} | {period}</p>
        <p className="mb-0">{title}</p>
      </div>

      <div className="flex flex-wrap gap-[4px]">
        {badges.map((badge, index) => (
          <Badge key={index} variant={badge.variant}>
            {badge.label}
          </Badge>
        ))}
      </div>
    </Link>
  )
}
