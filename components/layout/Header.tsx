'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 h-[68px] w-full bg-white md:h-20">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-[17px] md:px-[120px]">
        <Link
          href="/"
          className="group text-left font-inter font-bold leading-[normal] transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <p className="mb-0 text-[10px] text-black transition-colors duration-300 group-hover:text-accent">
            Engineer
          </p>
          <p className="text-[20px] text-accent transition-all duration-300 group-hover:tracking-wider">
            Fugashi
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center gap-[25px] md:flex">
          <Link
            href="/profile"
            className="flex h-full items-center text-center font-noto text-[16px] font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="group relative text-black transition-colors duration-300 hover:text-accent">
              PROFILE
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
          </Link>
          <Link
            href="/products"
            className="flex h-full items-center font-noto text-[16px] font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="group relative text-black transition-colors duration-300 hover:text-accent">
              PRODUCTS
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
          </Link>
          <Link
            href="/posts"
            className="flex h-full items-center font-noto text-[16px] font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="group relative text-black transition-colors duration-300 hover:text-accent">
              POSTS
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
          </Link>
          <Link
            href="/contact"
            className="flex h-full items-center font-noto text-[16px] font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="group relative text-black transition-colors duration-300 hover:text-accent">
              CONTACT
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="relative flex h-[31px] w-[46px] items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 md:hidden"
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
            className="group border-b border-gray-200 py-4 font-noto text-[16px] font-medium text-black transition-all duration-300 hover:translate-x-2 hover:text-accent active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            PROFILE
          </Link>
          <Link
            href="/products"
            className="group border-b border-gray-200 py-4 font-noto text-[16px] font-medium text-black transition-all duration-300 hover:translate-x-2 hover:text-accent active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            PRODUCTS
          </Link>
          <Link
            href="/posts"
            className="group border-b border-gray-200 py-4 font-noto text-[16px] font-medium text-black transition-all duration-300 hover:translate-x-2 hover:text-accent active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            POSTS
          </Link>
          <Link
            href="/contact"
            className="py-4 font-noto text-[16px] font-medium text-black transition-all duration-300 hover:translate-x-2 hover:text-accent active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}
