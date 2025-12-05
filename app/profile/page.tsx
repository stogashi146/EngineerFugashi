import Header from '@/components/layout/Header'
import ProfileDetail from '@/components/profile/ProfileDetail'
import SkillSection from '@/components/profile/SkillSection'
import HistorySection from '@/components/profile/HistorySection'
import VisionSection from '@/components/profile/VisionSection'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'

export default function ProfilePage() {
  return (
    <main className="min-h-screen w-full bg-white">
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
