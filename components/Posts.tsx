import PostCard from './PostCard'
import SectionTitle from './ui/SectionTitle'
import Button from './ui/Button'

const posts = [
  {
    id: 1,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日'
  },
  {
    id: 2,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日'
  },
  {
    id: 3,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日'
  },
  {
    id: 4,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日'
  },
  {
    id: 5,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日'
  },
  {
    id: 6,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日'
  },
  {
    id: 7,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日'
  },
  {
    id: 8,
    imageUrl: '/images/post.jpg',
    title: 'Elasticsearchの書籍が分かりやすかったのでメモ',
    date: '2024年03月03日'
  }
]

export default function Posts() {
  return (
    <section id="posts" className="bg-white py-[86px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="mb-[73px]">
          <SectionTitle title="POSTS" subtitle="投稿一覧" />
        </div>

        <div className="grid grid-cols-4 gap-x-[23px] gap-y-[17px] mb-[32px]">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <Button href="#" variant="primary" size="medium">
            More
          </Button>
        </div>
      </div>
    </section>
  )
}
