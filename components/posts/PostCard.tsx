import Image from 'next/image'
import Badge from '../ui/Badge'

interface PostCardProps {
  imageUrl: string | null
  title: string
  date: string
  url: string
  source: 'wordpress' | 'qiita' | 'note'
}

const sourceLabels = {
  wordpress: 'Blog',
  qiita: 'Qiita',
  note: 'Note',
}

const DEFAULT_IMAGE = '/images/post-default.jpg'

export default function PostCard({ imageUrl, title, date, url, source }: PostCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className="relative mb-[5px] overflow-hidden rounded-lg border-[3px] border-black transition-shadow duration-300 group-hover:shadow-xl"
        style={{ aspectRatio: '236/236' }}
      >
        <div className="absolute inset-0 rounded-lg bg-[#d9d9d9] opacity-30"></div>
        <Image
          src={imageUrl || DEFAULT_IMAGE}
          alt={title}
          fill
          className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="font-noto-jp leading-[normal]">
        <p className="mb-0 line-clamp-2 text-[14px] font-medium text-black">{title}</p>
        <p className="mb-[4px] text-[12px] text-[#373737]">{date}</p>
        <Badge variant="secondary">{sourceLabels[source]}</Badge>
      </div>
    </a>
  )
}
