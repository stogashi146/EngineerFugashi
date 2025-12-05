import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white h-20 w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-[120px]">
        <Link href="/" className="font-inter font-bold text-left leading-[normal]">
          <p className="text-[10px] text-black mb-0">Engineer</p>
          <p className="text-[20px] text-accent">Fugashi</p>
        </Link>
        <nav className="flex gap-[25px] items-center h-full">
          <Link href="/profile" className="font-noto font-medium text-[16px] text-black hover:text-accent transition h-full flex items-center text-center">
            PROFILE
          </Link>
          <Link href="/works" className="font-noto font-medium text-[16px] text-black hover:text-accent transition h-full flex items-center">
            WORKS
          </Link>
          <Link href="/posts" className="font-noto font-medium text-[16px] text-black hover:text-accent transition h-full flex items-center">
            POSTS
          </Link>
          <Link href="/#contact" className="font-noto font-medium text-[16px] text-black hover:text-accent transition h-full flex items-center">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}
