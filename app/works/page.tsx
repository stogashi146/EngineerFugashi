import Contact from '@/components/layout/Contact'
import WorksFilteredGrid from '@/components/works/WorksFilteredGrid'
import Pagination from '@/components/ui/Pagination'
import { works } from '@/data/works'

export default function WorksPage() {
  return (
    <>
      {/* WORKS Title */}
      <div className="bg-white pb-[32px] pt-[68px] md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[240px]">
          <h1 className="text-center font-noto text-[36px] font-bold leading-[normal] text-accent underline md:text-[48px]">
            WORKS
          </h1>
        </div>
      </div>

      {/* Works List */}
      <section className="bg-white pb-[50px] md:pb-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[20px] lg:px-[240px]">
          <WorksFilteredGrid works={works} showFilters={true} />

          <div className="mt-[32px] md:mt-[40px]">
            <Pagination currentPage={1} totalPages={9} />
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
