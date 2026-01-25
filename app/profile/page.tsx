import Header from '@/components/layout/Header'
import ProfileDetail from '@/components/profile/ProfileDetail'
import SkillSection from '@/components/profile/SkillSection'
import HistorySection from '@/components/profile/HistorySection'
import Contact from '@/components/layout/Contact'
import SectionTitle from '@/components/ui/SectionTitle'

export default function ProfilePage() {
  return (
    <>
      <SectionTitle sectionType="h1" title="PROFILE" />
      <ProfileDetail />
      <SkillSection />
      <HistorySection />
      <Contact />
    </>
  )
}
