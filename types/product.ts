import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk'

export type CategoryType = 'Web' | 'Game' | 'Mobile'

// microCMSから取得するProduct型
export interface CMSProduct extends MicroCMSListContent {
  thumbnail: MicroCMSImage
  images: MicroCMSImage[]
  title: string
  category: CategoryType[]
  releaseDate: string // ISO日付文字列
  technologies: string[]
  overview: string
  contents: string
  outputs: {
    fieldId: string
    url: string
    type: 'URL' | 'GitHub' | 'AppStore' | 'GooglePlay' | 'Qiita'
  }[]
}

// 一覧表示用の変換済み型
export interface Product {
  id: string
  imageUrl: string
  category: CategoryType[]
  releaseDate: string
  title: string
  badges: Array<{ label: string; variant?: 'primary' | 'secondary' }>
}

// 詳細表示用の型
export interface ProductDetail {
  id: string
  thumbnail: MicroCMSImage
  images: MicroCMSImage[]
  title: string
  category: CategoryType[]
  releaseDate: string
  technologies: string[]
  overview: string
  contents: string
  outputs: {
    fieldId: string
    url: string
    type: 'URL' | 'GitHub' | 'AppStore' | 'GooglePlay' | 'Qiita'
  }[]
}
