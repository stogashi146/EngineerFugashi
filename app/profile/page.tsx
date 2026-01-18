import Header from '@/components/layout/Header'
import ProfileDetail from '@/components/profile/ProfileDetail'
import SkillSection from '@/components/profile/SkillSection'
import HistorySection from '@/components/profile/HistorySection'
import VisionSection from '@/components/profile/VisionSection'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import SectionTitle from '@/components/ui/SectionTitle'

export default function ProfilePage() {
  return (
    <>
      <SectionTitle sectionType="h1" title="PROFILE" />
      <ProfileDetail />
      <SkillSection />
      <HistorySection />
      {/* <VisionSection /> */}
      <Contact />
      {/* <Footer /> */}
    </>
  )
}
