import Image from 'next/image'

interface PostCardProps {
  imageUrl: string
  title: string
  date: string
}

export default function PostCard({ imageUrl, title, date }: PostCardProps) {
  return (
    <div className="group">
      <div
        className="relative mb-[5px] overflow-hidden rounded-lg border-[3px] border-black"
        style={{ aspectRatio: '236/236' }}
      >
        <div className="absolute inset-0 rounded-lg bg-[#d9d9d9] opacity-30"></div>
        <Image src={imageUrl} alt={title} fill className="rounded-lg object-cover" />
      </div>
      <div className="font-noto-jp leading-[normal]">
        <p className="mb-0 text-[14px] font-medium text-black">{title}</p>
        <p className="mb-0 text-[12px] font-bold text-black">{date}</p>
      </div>
    </div>
  )
}
