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
]
