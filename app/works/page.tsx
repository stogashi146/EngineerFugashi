import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FilterButton from "@/components/ui/FilterButton";
import WorkDetailCard from "@/components/works/WorkDetailCard";
import Pagination from "@/components/ui/Pagination";

const works = [
  {
    id: 1,
    imageUrl: "/images/work1.jpg",
    category: "教育",
    period: "2025年4月〜現在",
    title: "入試採点システム 新規開発 PM兼開発",
    badges: [
      { label: "ClientWork", variant: "primary" as const },
      { label: "PM", variant: "secondary" as const },
      { label: "React", variant: "secondary" as const },
      { label: "TypeScript", variant: "secondary" as const },
    ],
  },
  {
    id: 2,
    imageUrl: "/images/work2.jpg",
    category: "教育",
    period: "2025年4月〜現在",
    title: "入試採点システム 新規開発 PM兼開発",
    badges: [
      { label: "Original", variant: "primary" as const },
      { label: "PM", variant: "secondary" as const },
      { label: "React", variant: "secondary" as const },
    ],
  },
  {
    id: 3,
    imageUrl: "/images/work3.jpg",
    category: "教育",
    period: "2025年4月〜現在",
    title: "入試採点システム 新規開発 PM兼開発",
    badges: [
      { label: "ClientWork", variant: "primary" as const },
      { label: "PM", variant: "secondary" as const },
      { label: "React", variant: "secondary" as const },
      { label: "TypeScript", variant: "secondary" as const },
    ],
  },
  {
    id: 4,
    imageUrl: "/images/work4.jpg",
    category: "教育",
    period: "2025年4月〜現在",
    title: "入試採点システム 新規開発 PM兼開発",
    badges: [
      { label: "ClientWork", variant: "primary" as const },
      { label: "PM", variant: "secondary" as const },
      { label: "React", variant: "secondary" as const },
      { label: "TypeScript", variant: "secondary" as const },
    ],
  },
  {
    id: 5,
    imageUrl: "/images/work5.jpg",
    category: "教育",
    period: "2025年4月〜現在",
    title: "入試採点システム 新規開発 PM兼開発",
    badges: [
      { label: "ClientWork", variant: "primary" as const },
      { label: "PM", variant: "secondary" as const },
      { label: "React", variant: "secondary" as const },
      { label: "TypeScript", variant: "secondary" as const },
    ],
  },
  {
    id: 6,
    imageUrl: "/images/work6.jpg",
    category: "教育",
    period: "2025年4月〜現在",
    title: "入試採点システム 新規開発 PM兼開発",
    badges: [
      { label: "ClientWork", variant: "primary" as const },
      { label: "PM", variant: "secondary" as const },
      { label: "React", variant: "secondary" as const },
      { label: "TypeScript", variant: "secondary" as const },
    ],
  },
  {
    id: 7,
    imageUrl: "/images/work1.jpg",
    category: "教育",
    period: "2025年4月〜現在",
    title: "入試採点システム 新規開発 PM兼開発",
    badges: [
      { label: "ClientWork", variant: "primary" as const },
      { label: "PM", variant: "secondary" as const },
      { label: "React", variant: "secondary" as const },
      { label: "TypeScript", variant: "secondary" as const },
    ],
  },
  {
    id: 8,
    imageUrl: "/images/work2.jpg",
    category: "教育",
    period: "2025年4月〜現在",
    title: "入試採点システム 新規開発 PM兼開発",
    badges: [
      { label: "ClientWork", variant: "primary" as const },
      { label: "PM", variant: "secondary" as const },
      { label: "React", variant: "secondary" as const },
      { label: "TypeScript", variant: "secondary" as const },
    ],
  },
];

export default function WorksPage() {
  return (
    <main className="bg-white w-full min-h-screen">
      <Header />

      {/* WORKS Title */}
      <section className="bg-white pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto px-[240px]">
          <h1 className="font-noto font-bold text-[48px] text-accent text-center underline leading-[normal]">
            WORKS
          </h1>
        </div>
      </section>

      {/* Works List */}
      <section className="bg-white pb-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="flex gap-[19px] mb-[44px]">
            <FilterButton active>All</FilterButton>
            <FilterButton>ClientWork</FilterButton>
            <FilterButton>Original</FilterButton>
          </div>

          <div className="grid grid-cols-4 gap-x-[24px] gap-y-[17px] mb-[40px]">
            {works.map((work) => (
              <WorkDetailCard
                key={work.id}
                id={work.id}
                imageUrl={work.imageUrl}
                category={work.category}
                period={work.period}
                title={work.title}
                badges={work.badges}
              />
            ))}
          </div>

          <Pagination currentPage={1} totalPages={9} />
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
