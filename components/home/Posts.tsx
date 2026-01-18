import PostCard from './PostCard'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const posts = [
  {
    id: 1,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日',
  },
  {
    id: 2,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日',
  },
  {
    id: 3,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日',
  },
  {
    id: 4,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日',
  },
  {
    id: 5,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日',
  },
  {
    id: 6,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日',
  },
  {
    id: 7,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日',
  },
  {
    id: 8,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日',
  },
]

export default function Posts() {
  return (
    <section id="posts" className="bg-white py-[50px] md:py-[86px]">
      <div className="mx-auto max-w-[1440px] px-[17px] md:px-[40px] xl:px-[160px]">
        <div>
          <SectionTitle sectionType="h2" title="POSTS" subtitle="投稿一覧" />
        </div>

        <div className="mb-[28px] grid grid-cols-2 gap-x-[16px] gap-y-[16px] md:mb-[32px] md:grid-cols-4 md:gap-x-[23px] md:gap-y-[17px]">
          {posts.slice(0, 4).map((post) => (
            <PostCard key={post.id} imageUrl={post.imageUrl} title={post.title} date={post.date} />
          ))}
        </div>

        <div className="flex justify-center md:justify-end">
          <Button href="#" variant="primary" size="medium">
            More
          </Button>
        </div>
      </div>
    </section>
  )
}
