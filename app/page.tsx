import Header from '@/components/layout/Header'
import Profile from '@/components/home/Profile'
import Works from '@/components/home/Works'
import Posts from '@/components/home/Posts'
import Contact from '@/components/layout/Contact'

export default function Home() {
  return (
    <>
      <Profile />
      <Works />
      <Posts />
      <Contact />
    </>
  )
}
