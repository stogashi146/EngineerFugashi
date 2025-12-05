'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 h-[68px] w-full bg-white md:h-20">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-[17px] md:px-[120px]">
        <Link href="/" className="text-left font-inter font-bold leading-[normal]">
          <p className="mb-0 text-[10px] text-black">Engineer</p>
          <p className="text-[20px] text-accent">Fugashi</p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center gap-[25px] md:flex">
          <Link
            href="/profile"
            className="flex h-full items-center text-center font-noto text-[16px] font-medium text-black transition hover:text-accent"
          >
            PROFILE
          </Link>
          <Link
            href="/works"
            className="flex h-full items-center font-noto text-[16px] font-medium text-black transition hover:text-accent"
          >
            WORKS
          </Link>
          <Link
            href="/posts"
            className="flex h-full items-center font-noto text-[16px] font-medium text-black transition hover:text-accent"
          >
            POSTS
          </Link>
          <Link
            href="/contact"
            className="flex h-full items-center font-noto text-[16px] font-medium text-black transition hover:text-accent"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="relative flex h-[31px] w-[46px] items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`block h-0.5 bg-accent transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'translate-y-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-accent transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-accent transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[68px] z-40 bg-white transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-full opacity-0'
        }`}
      >
        <nav className="flex flex-col p-[17px]">
          <Link
            href="/profile"
            className="border-b border-gray-200 py-4 font-noto text-[16px] font-medium text-black transition hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            PROFILE
          </Link>
          <Link
            href="/works"
            className="border-b border-gray-200 py-4 font-noto text-[16px] font-medium text-black transition hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            WORKS
          </Link>
          <Link
            href="/posts"
            className="border-b border-gray-200 py-4 font-noto text-[16px] font-medium text-black transition hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            POSTS
          </Link>
          <Link
            href="/contact"
            className="py-4 font-noto text-[16px] font-medium text-black transition hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}
