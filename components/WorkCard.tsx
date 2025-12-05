import Image from 'next/image'

interface WorkCardProps {
  imageUrl: string
  title: string
  description: string
}

export default function WorkCard({ imageUrl, title, description }: WorkCardProps) {
  return (
    <a href="#" className="group">
      <div className="border-[3px] border-black rounded-lg overflow-hidden mb-[4px] relative" style={{ aspectRatio: '235/236' }}>
        <div className="absolute inset-0 bg-[#c4c4c4] opacity-30 rounded-lg"></div>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="font-noto-jp font-medium text-[14px] text-black leading-[normal]">
        <p className="mb-0">{title}</p>
        <p className="mb-0">{description}</p>
      </div>
    </a>
  )
}
