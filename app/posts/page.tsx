import Contact from '@/components/layout/Contact'
import PostsFilteredGrid from '@/components/posts/PostsFilteredGrid'
import { getAllPosts } from '@/lib/posts'

export default async function PostsPage() {
  const posts = await getAllPosts()

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
          <PostsFilteredGrid
            posts={posts}
            showFilters={true}
            showPagination={true}
            itemsPerPage={8}
            filterButtonSize="small"
          />
        </div>
      </section>

      <Contact />
    </>
  )
}
