import Header from '@/components/layout/Header'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import FilterButton from '@/components/ui/FilterButton'
import PostDetailCard from '@/components/posts/PostDetailCard'
import Pagination from '@/components/ui/Pagination'

const posts = [
  {
    id: 1,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名',
  },
  {
    id: 2,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名',
  },
  {
    id: 3,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名',
  },
  {
    id: 4,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名',
  },
  {
    id: 5,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名',
  },
  {
    id: 6,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名',
  },
  {
    id: 7,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名',
  },
  {
    id: 8,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名',
  },
]

export default function PostsPage() {
  return (
    <>
      {/* POSTS Title */}
      <section className="bg-white pb-[32px] pt-[68px] md:pb-12 md:pt-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[240px]">
          <h1 className="text-center font-noto text-[36px] font-bold leading-[normal] text-accent underline md:text-[48px]">
            POSTS
          </h1>
        </div>
      </section>

      {/* Posts List */}
      <section className="bg-white pb-[50px] md:pb-20">
        <div className="mx-auto max-w-[1440px] px-[17px] md:px-[20px] lg:px-[240px]">
          <div className="mb-[32px] flex gap-[12px] overflow-x-auto md:mb-[44px] md:gap-[11px]">
            <FilterButton active>All</FilterButton>
            <FilterButton>カテゴリー1</FilterButton>
            <FilterButton>カテゴリー2</FilterButton>
            <FilterButton>カテゴリー3</FilterButton>
            <FilterButton>カテゴリー3</FilterButton>
            <FilterButton>カテゴリー3</FilterButton>
            <FilterButton>カテゴリー3</FilterButton>
          </div>

          <div className="mb-[32px] grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:mb-[40px] md:grid-cols-4 md:gap-x-[23px] md:gap-y-[17px]">
            {posts.map((post) => (
              <PostDetailCard
                key={post.id}
                imageUrl={post.imageUrl}
                title={post.title}
                description={post.description}
                category={post.category}
              />
            ))}
          </div>

          <Pagination currentPage={1} totalPages={9} />
        </div>
      </section>

      <Contact />
    </>
  )
}
