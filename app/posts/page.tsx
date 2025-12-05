import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FilterButton from '@/components/ui/FilterButton'
import PostDetailCard from '@/components/posts/PostDetailCard'
import Pagination from '@/components/ui/Pagination'

const posts = [
  {
    id: 1,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名'
  },
  {
    id: 2,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名'
  },
  {
    id: 3,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名'
  },
  {
    id: 4,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名'
  },
  {
    id: 5,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名'
  },
  {
    id: 6,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名'
  },
  {
    id: 7,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名'
  },
  {
    id: 8,
    imageUrl: '/images/post1.jpg',
    title: 'ページタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    category: 'カテゴリー名'
  }
]

export default function PostsPage() {
  return (
    <main className="bg-white w-full min-h-screen">
      <Header />

      {/* POSTS Title */}
      <section className="bg-white pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto px-[240px]">
          <h1 className="font-noto font-bold text-[48px] text-accent text-center underline leading-[normal]">
            POSTS
          </h1>
        </div>
      </section>

      {/* Posts List */}
      <section className="bg-white pb-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="flex gap-[11px] mb-[44px]">
            <FilterButton active>All</FilterButton>
            <FilterButton>カテゴリー1</FilterButton>
            <FilterButton>カテゴリー2</FilterButton>
            <FilterButton>カテゴリー3</FilterButton>
            <FilterButton>カテゴリー3</FilterButton>
            <FilterButton>カテゴリー3</FilterButton>
            <FilterButton>カテゴリー3</FilterButton>
          </div>

          <div className="grid grid-cols-4 gap-x-[23px] gap-y-[17px] mb-[40px]">
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
      <Footer />
    </main>
  )
}
