import Header from '@/components/layout/Header'
import Profile from '@/components/home/Profile'
import Works from '@/components/home/Works'
import Posts from '@/components/home/Posts'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header />
      <Profile />
      <Works />
      <Posts />
      <Contact />
      <Footer />
    </main>
  )
}
