export interface Work {
  id: number
  imageUrl: string
  category: string
  period: string
  title: string
  badges: Array<{ label: string; variant?: 'primary' | 'secondary' }>
}

export const works: Work[] = [
  {
    id: 1,
    imageUrl: '/images/work1.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 2,
    imageUrl: '/images/work2.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'Original', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
    ],
  },
  {
    id: 3,
    imageUrl: '/images/work3.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 4,
    imageUrl: '/images/work4.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 5,
    imageUrl: '/images/work5.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 6,
    imageUrl: '/images/work6.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 7,
    imageUrl: '/images/work1.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 8,
    imageUrl: '/images/work2.jpg',
    category: '教育',
    period: '2025年4月〜現在',
    title: '入試採点システム 新規開発 PM兼開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'PM', variant: 'secondary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 9,
    imageUrl: '/images/work3.jpg',
    category: '教育',
    period: '2024年10月〜2025年3月',
    title: 'オンライン学習プラットフォーム開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'Node.js', variant: 'secondary' as const },
    ],
  },
  {
    id: 10,
    imageUrl: '/images/work4.jpg',
    category: 'EC',
    period: '2024年6月〜2024年9月',
    title: 'ECサイトリニューアル',
    badges: [
      { label: 'Original', variant: 'primary' as const },
      { label: 'Next.js', variant: 'secondary' as const },
      { label: 'TypeScript', variant: 'secondary' as const },
    ],
  },
  {
    id: 11,
    imageUrl: '/images/work5.jpg',
    category: '金融',
    period: '2024年1月〜2024年5月',
    title: '投資管理アプリ開発',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'React Native', variant: 'secondary' as const },
      { label: 'Firebase', variant: 'secondary' as const },
    ],
  },
  {
    id: 12,
    imageUrl: '/images/work6.jpg',
    category: '医療',
    period: '2023年8月〜2023年12月',
    title: '電子カルテシステム',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'Vue.js', variant: 'secondary' as const },
      { label: 'Laravel', variant: 'secondary' as const },
    ],
  },
  {
    id: 13,
    imageUrl: '/images/work1.jpg',
    category: '不動産',
    period: '2023年4月〜2023年7月',
    title: '物件管理システム',
    badges: [
      { label: 'Original', variant: 'primary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'PostgreSQL', variant: 'secondary' as const },
    ],
  },
  {
    id: 14,
    imageUrl: '/images/work2.jpg',
    category: '飲食',
    period: '2023年1月〜2023年3月',
    title: '予約管理システム',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'Ruby', variant: 'secondary' as const },
      { label: 'Rails', variant: 'secondary' as const },
    ],
  },
  {
    id: 15,
    imageUrl: '/images/work3.jpg',
    category: 'メディア',
    period: '2022年9月〜2022年12月',
    title: 'ニュースサイト構築',
    badges: [
      { label: 'Original', variant: 'primary' as const },
      { label: 'Next.js', variant: 'secondary' as const },
      { label: 'Strapi', variant: 'secondary' as const },
    ],
  },
  {
    id: 16,
    imageUrl: '/images/work4.jpg',
    category: '人材',
    period: '2022年5月〜2022年8月',
    title: '求人マッチングサービス',
    badges: [
      { label: 'ClientWork', variant: 'primary' as const },
      { label: 'React', variant: 'secondary' as const },
      { label: 'Express', variant: 'secondary' as const },
    ],
  },
  {
    id: 17,
    imageUrl: '/images/work5.jpg',
    category: '旅行',
    period: '2022年1月〜2022年4月',
    title: '旅行予約プラットフォーム',
    badges: [
      { label: 'Original', variant: 'primary' as const },
      { label: 'Vue.js', variant: 'secondary' as const },
      { label: 'Node.js', variant: 'secondary' as const },
    ],
  },
]
