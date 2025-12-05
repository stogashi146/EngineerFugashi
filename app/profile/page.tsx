import Header from '@/components/Header'
import ProfileDetail from '@/components/profile/ProfileDetail'
import SkillSection from '@/components/profile/SkillSection'
import HistorySection from '@/components/profile/HistorySection'
import VisionSection from '@/components/profile/VisionSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function ProfilePage() {
  return (
    <main className="bg-white w-full min-h-screen">
      <Header />
      <ProfileDetail />
      <SkillSection />
      <HistorySection />
      <VisionSection />
      <Contact />
      <Footer />
    </main>
  )
}
