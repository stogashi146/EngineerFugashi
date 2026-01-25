// 統一された投稿型
export interface Post {
  id: string
  title: string
  url: string
  imageUrl: string | null
  date: string // ISO日付文字列
  formattedDate: string // 表示用「2024年03月03日」形式
  source: 'wordpress' | 'qiita' | 'note'
  excerpt?: string
}

// WordPress REST API レスポンス型
export interface WordPressPost {
  id: number
  date: string
  title: {
    rendered: string
  }
  link: string
  excerpt: {
    rendered: string
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
  }
}

// Qiita API レスポンス型
export interface QiitaPost {
  id: string
  title: string
  url: string
  created_at: string
  body: string
}

// Note RSS/API レスポンス型
export interface NotePost {
  id: number
  name: string
  publishAt: string
  noteUrl: string
  eyecatch?: string
  body?: string
}
