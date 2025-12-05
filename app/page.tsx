import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Works from '@/components/Works'
import Posts from '@/components/Posts'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white w-full min-h-screen">
      <Header />
      <Profile />
      <Works />
      <Posts />
      <Contact />
      <Footer />
    </main>
  )
}
