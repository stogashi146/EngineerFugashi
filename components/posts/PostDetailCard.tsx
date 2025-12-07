import Image from 'next/image'
import Badge from '../ui/Badge'

interface PostDetailCardProps {
  imageUrl: string
  title: string
  description: string
  category: string
}

export default function PostDetailCard({
  imageUrl,
  title,
  description,
  category,
}: PostDetailCardProps) {
  return (
    <a href="#" className="group block">
      <div
        className="relative mb-[4px] overflow-hidden rounded-lg border-[2px] border-black bg-[#505050] bg-opacity-30 md:mb-[4px] md:border-[3px]"
        style={{ aspectRatio: '236/236' }}
      >
        <Image src={imageUrl} alt={title} fill className="rounded-lg object-cover" />
      </div>

      <div className="mb-[6px] font-noto-jp text-[12px] font-medium leading-[normal] text-black md:mb-[8px] md:text-[14px]">
        <p className="mb-0 text-[14px] text-accent">{title}</p>
        <p className="mb-0 truncate text-[10px]">{description}</p>
      </div>

      <div className="flex flex-wrap gap-[4px]">
        <Badge variant="secondary">{category}</Badge>
      </div>
    </a>
  )
}
