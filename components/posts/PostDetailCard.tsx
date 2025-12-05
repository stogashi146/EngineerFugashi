import Image from 'next/image'
import Badge from '../ui/Badge'

interface PostDetailCardProps {
  imageUrl: string
  title: string
  description: string
  category: string
}

export default function PostDetailCard({ imageUrl, title, description, category }: PostDetailCardProps) {
  return (
    <a href="#" className="block group">
      <div className="border-[3px] border-black rounded-lg overflow-hidden mb-[12px] relative bg-[#505050] bg-opacity-30" style={{ aspectRatio: '236/236' }}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="font-noto-jp font-medium text-[14px] text-black leading-[normal] mb-[8px]">
        <p className="mb-0">{title}</p>
        <p className="mb-0">{description}</p>
      </div>

      <div className="flex flex-wrap gap-[4px]">
        <Badge variant="secondary">
          {category}
        </Badge>
      </div>
    </a>
  )
}
