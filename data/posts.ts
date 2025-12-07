export interface Post {
  id: number
  imageUrl: string
  title: string
  description: string
  category: string
}

export const posts: Post[] = [
  {
    id: 1,
    imageUrl: '/images/post1.jpg',
    title: 'React 19の新機能を徹底解説',
    description:
      'React 19で追加された新機能について、実際のコード例とともに詳しく解説します。Server Componentsやアクションなど。',
    category: '技術',
  },
  {
    id: 2,
    imageUrl: '/images/post1.jpg',
    title: 'デザインシステム構築の実践ガイド',
    description:
      'スケーラブルなデザインシステムの構築方法について、実際のプロジェクト経験をもとに解説します。',
    category: 'デザイン',
  },
  {
    id: 3,
    imageUrl: '/images/post1.jpg',
    title: 'エンジニアのキャリアパスについて考える',
    description:
      'フロントエンドエンジニアのキャリアパスについて、自身の経験を交えながら考察します。',
    category: 'キャリア',
  },
  {
    id: 4,
    imageUrl: '/images/post1.jpg',
    title: 'Next.js 15のパフォーマンス最適化',
    description:
      'Next.js 15でのパフォーマンス最適化のベストプラクティスを紹介します。画像最適化やキャッシング戦略など。',
    category: '技術',
  },
  {
    id: 5,
    imageUrl: '/images/post1.jpg',
    title: 'Figmaでのコンポーネント設計',
    description:
      'Figmaを使った効率的なコンポーネント設計の方法を、実際のデザインプロセスとともに解説します。',
    category: 'デザイン',
  },
  {
    id: 6,
    imageUrl: '/images/post1.jpg',
    title: 'フリーランスエンジニアの働き方',
    description:
      'フリーランスエンジニアとして働く上での注意点や、案件獲得のコツについて共有します。',
    category: 'キャリア',
  },
  {
    id: 7,
    imageUrl: '/images/post1.jpg',
    title: 'TypeScriptの型安全性を高める',
    description: 'TypeScriptで型安全性を高めるためのテクニックと、実践的なパターンを紹介します。',
    category: '技術',
  },
  {
    id: 8,
    imageUrl: '/images/post1.jpg',
    title: 'UIアニメーションの実装パターン',
    description:
      'ユーザー体験を向上させるUIアニメーションの実装パターンと、パフォーマンス最適化について。',
    category: 'デザイン',
  },
  {
    id: 9,
    imageUrl: '/images/post1.jpg',
    title: 'テックリードとしての成長記録',
    description: 'テックリードとしての役割と責任、チームマネジメントについての学びを共有します。',
    category: 'キャリア',
  },
  {
    id: 10,
    imageUrl: '/images/post1.jpg',
    title: 'GraphQLとREST APIの使い分け',
    description:
      'GraphQLとREST APIの特徴を比較し、プロジェクトに応じた適切な選択について解説します。',
    category: '技術',
  },
  {
    id: 11,
    imageUrl: '/images/post1.jpg',
    title: 'アクセシビリティを考慮したデザイン',
    description: 'Webアクセシビリティを考慮したデザインの重要性と、実装のポイントを紹介します。',
    category: 'デザイン',
  },
  {
    id: 12,
    imageUrl: '/images/post1.jpg',
    title: 'エンジニアの学習方法と成長戦略',
    description: '効率的な学習方法と、継続的なスキルアップのための戦略について考察します。',
    category: 'キャリア',
  },
  {
    id: 13,
    imageUrl: '/images/post1.jpg',
    title: 'DockerとKubernetesの基礎',
    description: 'コンテナ技術の基礎から、実際の開発環境での活用方法まで解説します。',
    category: '技術',
  },
  {
    id: 14,
    imageUrl: '/images/post1.jpg',
    title: 'デザイントレンド 2025',
    description: '2025年のWebデザイントレンドと、それを取り入れる際のポイントについて。',
    category: 'デザイン',
  },
  {
    id: 15,
    imageUrl: '/images/post1.jpg',
    title: 'リモートワークでの生産性向上術',
    description: 'リモートワーク環境での生産性を高めるための工夫と、コミュニケーションのコツ。',
    category: 'キャリア',
  },
]
