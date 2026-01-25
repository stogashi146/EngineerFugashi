import PostCard from './PostCard'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { getAllPosts } from '@/lib/posts'

export default async function Posts() {
  const posts = await getAllPosts()

  return (
    <section id="posts" className="bg-white py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[40px] xl:px-[160px]">
        <div>
          <SectionTitle sectionType="h2" title="POSTS" subtitle="投稿一覧" />
        </div>

        <div className="mb-[28px] grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:mb-[32px] md:grid-cols-4 md:gap-x-[23px] md:gap-y-[17px]">
          {posts.slice(0, 4).map((post) => (
            <PostCard
              key={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              date={post.formattedDate}
              url={post.url}
              source={post.source}
            />
          ))}
        </div>

        <div className="flex justify-end md:justify-end">
          <Button href="/posts" variant="outline" size="medium">
            More
          </Button>
        </div>
      </div>
    </section>
  )
}
