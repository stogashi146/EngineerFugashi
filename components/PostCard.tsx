import Image from 'next/image'

interface PostCardProps {
  imageUrl: string
  title: string
  date: string
}

export default function PostCard({ imageUrl, title, date }: PostCardProps) {
  return (
    <div className="group">
      <div className="border-[3px] border-black rounded-lg overflow-hidden mb-[5px] relative" style={{ aspectRatio: '236/236' }}>
        <div className="absolute inset-0 bg-[#d9d9d9] opacity-30 rounded-lg"></div>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="font-noto-jp leading-[normal]">
        <p className="text-[14px] font-medium text-black mb-0">
          {title}
        </p>
        <p className="text-[12px] font-bold text-black mb-0">{date}</p>
      </div>
    </div>
  )
}
