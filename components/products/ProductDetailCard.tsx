import Image from 'next/image'
import Link from 'next/link'
import Badge from '../ui/Badge'

interface ProductDetailCardProps {
  id: number | string
  imageUrl: string
  category: string[]
  releaseDate: string
  title: string
  badges?: Array<{ label: string; variant?: 'primary' | 'secondary' }>
}

export default function ProductDetailCard({
  id,
  imageUrl,
  category,
  releaseDate,
  title,
  badges = [],
}: ProductDetailCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className="relative mb-[4px] overflow-hidden rounded-lg border-[2px] border-black bg-[#505050] bg-opacity-30 transition-shadow duration-300 group-hover:shadow-xl md:mb-[4px] md:border-[3px]"
        style={{ aspectRatio: '235/236' }}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="mb-[6px] font-noto-jp text-[12px] font-medium leading-[normal] text-black md:mb-[8px] md:text-[14px]">
        <p className="mb:text-[16px] mb-0 text-[14px] font-medium text-black">{title}</p>
        <p className="mb-[4px] text-[12px] text-[#373737]">
          {category.join(' / ')} | {releaseDate}
        </p>
      </div>

      <div className="flex flex-wrap gap-[4px]">
        {badges.length > 0 &&
          badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant}>
              {badge.label}
            </Badge>
          ))}
      </div>
    </Link>
  )
}
