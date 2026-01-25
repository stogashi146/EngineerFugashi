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
        className="relative mb-[5px] rounded-lg border-[3px] border-black bg-white transition-shadow duration-300 group-hover:shadow-xl"
        style={{ aspectRatio: '16/9' }}
      >
        <Image
          src={imageUrl || DEFAULT_IMAGE}
          alt={title}
          fill
          className="rounded-lg object-contain"
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
