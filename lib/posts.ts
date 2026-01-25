import type { Post, WordPressPost, QiitaPost, NotePost } from '@/types/post'

const WORDPRESS_URL = 'https://cheepday.com'
const QIITA_USERNAME = 'fugashi5'
const NOTE_USERNAME = 'shunzi5'

// 日付をフォーマット
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}年${month}月${day}日`
}

// HTMLタグを除去
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

// WordPress記事を取得
async function fetchWordPressPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=10&_embed`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []

    const posts: WordPressPost[] = await res.json()

    return posts.map((post) => ({
      id: `wp-${post.id}`,
      title: stripHtml(post.title.rendered),
      url: post.link,
      imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      date: post.date,
      formattedDate: formatDate(post.date),
      source: 'wordpress' as const,
      excerpt: stripHtml(post.excerpt.rendered).slice(0, 100),
    }))
  } catch (error) {
    console.error('WordPress fetch error:', error)
    return []
  }
}

// Qiita記事を取得
async function fetchQiitaPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`https://qiita.com/api/v2/users/${QIITA_USERNAME}/items?per_page=10`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []

    const posts: QiitaPost[] = await res.json()

    return posts.map((post) => ({
      id: `qiita-${post.id}`,
      title: post.title,
      url: post.url,
      imageUrl: null, // Qiitaは記事のサムネイルを提供していない
      date: post.created_at,
      formattedDate: formatDate(post.created_at),
      source: 'qiita' as const,
      excerpt: post.body.slice(0, 100),
    }))
  } catch (error) {
    console.error('Qiita fetch error:', error)
    return []
  }
}

// Note記事を取得（RSS経由）
async function fetchNotePosts(): Promise<Post[]> {
  try {
    // NoteのAPIを使用
    const res = await fetch(
      `https://note.com/api/v2/creators/${NOTE_USERNAME}/contents?kind=note&per_page=10`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []

    const data = await res.json()
    const posts: NotePost[] = data.data?.contents || []

    return posts.map((post) => ({
      id: `note-${post.id}`,
      title: post.name,
      url: post.noteUrl,
      imageUrl: post.eyecatch || null,
      date: post.publishAt,
      formattedDate: formatDate(post.publishAt),
      source: 'note' as const,
      excerpt: post.body?.slice(0, 100) || '',
    }))
  } catch (error) {
    console.error('Note fetch error:', error)
    return []
  }
}

// すべての記事を取得して日付順にソート
export async function getAllPosts(): Promise<Post[]> {
  const [wordpressPosts, qiitaPosts, notePosts] = await Promise.all([
    fetchWordPressPosts(),
    fetchQiitaPosts(),
    fetchNotePosts(),
  ])

  const allPosts = [...wordpressPosts, ...qiitaPosts, ...notePosts]

  // 日付の降順（新しい順）でソート
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// ソース別にフィルター
export function filterPostsBySource(posts: Post[], source: string): Post[] {
  if (source === 'All') return posts
  return posts.filter((post) => post.source === source)
}
