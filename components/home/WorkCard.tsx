import Image from 'next/image'

interface WorkCardProps {
  imageUrl: string
  title: string
  description: string
}

export default function WorkCard({ imageUrl, title, description }: WorkCardProps) {
  return (
    <a href="#" className="group">
      <div
        className="relative mb-[4px] overflow-hidden rounded-lg border-[3px] border-black"
        style={{ aspectRatio: '235/236' }}
      >
        <div className="absolute inset-0 rounded-lg bg-[#c4c4c4] opacity-30"></div>
        <Image src={imageUrl} alt={title} fill className="rounded-lg object-cover" />
      </div>
      <div className="font-noto-jp text-[14px] font-medium leading-[normal] text-black">
        <p className="mb-0">{title}</p>
        <p className="mb-0">{description}</p>
      </div>
    </a>
  )
}
