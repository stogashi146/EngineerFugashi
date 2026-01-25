import type { Metadata } from 'next'
import { Inter, Noto_Sans, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Engineer Fugashi - フルスタックエンジニア',
  description: 'フルスタックエンジニア Fugashi のポートフォリオサイト',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSans.variable} ${notoSansJP.variable}`}>
        <main className="flex min-h-screen w-full flex-col bg-white">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
