'use client'

import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import WorksFilteredGrid from '../works/WorksFilteredGrid'
import { works } from '@/data/works'

export default function Works() {
  return (
    <section id="works" className="bg-main py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[20px] xl:px-[160px]">
        <div className="mb-[16px] md:mb-[16px]">
          <SectionTitle sectionType="h2" title="WORKS" subtitle="制作実績" />
        </div>

        <WorksFilteredGrid
          works={works}
          showFilters={true}
          showBadges={false}
          maxItems={4}
          filterButtonSize="small"
          filterGap="gap-[6px] md:gap-[11px]"
          filterMarginBottom="mb-[16px] md:mb-[16px]"
        />

        <div className="mt-[28px] flex justify-center md:mt-[32px] md:justify-end">
          <Button href="/works" variant="primary" size="medium">
            More
          </Button>
        </div>
      </div>
    </section>
  )
}
