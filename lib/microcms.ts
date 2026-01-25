import { createClient } from 'microcms-js-sdk'
import type { MicroCMSQueries } from 'microcms-js-sdk'
import type { CMSProduct, Product, ProductDetail } from '@/types/product'

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// releaseDate から「2025年4月」形式の文字列を生成
function formatReleaseDate(releaseDate: string): string {
  const date = new Date(releaseDate)
  return `${date.getFullYear()}年${date.getMonth() + 1}月`
}

// CMSデータを一覧用のProduct型に変換
function transformToProduct(cmsProduct: CMSProduct): Product {
  const badges: Product['badges'] = []

  // technologiesをbadgesに変換
  if (cmsProduct.technologies) {
    cmsProduct.technologies.forEach((tech) => {
      badges.push({ label: tech, variant: 'secondary' })
    })
  }

  return {
    id: cmsProduct.id,
    imageUrl: cmsProduct.thumbnail.url,
    category: cmsProduct.category,
    releaseDate: formatReleaseDate(cmsProduct.releaseDate),
    title: cmsProduct.title,
    badges,
  }
}

// CMSデータを詳細用のProductDetail型に変換
function transformToProductDetail(cmsProduct: CMSProduct): ProductDetail {
  return {
    id: cmsProduct.id,
    thumbnail: cmsProduct.thumbnail,
    images: cmsProduct.images || [],
    title: cmsProduct.title,
    category: cmsProduct.category,
    releaseDate: formatReleaseDate(cmsProduct.releaseDate),
    technologies: cmsProduct.technologies || [],
    overview: cmsProduct.overview || '',
    contents: cmsProduct.contents || '',
    outputs: cmsProduct.outputs || [],
  }
}

// Products一覧を取得
export async function getProducts(
  queries?: MicroCMSQueries
): Promise<{ products: Product[]; totalCount: number }> {
  const data = await client.getList<CMSProduct>({
    endpoint: 'products',
    queries: {
      limit: 100,
      ...queries,
    },
  })
  console.log(data)

  return {
    products: data.contents.map(transformToProduct),
    totalCount: data.totalCount,
  }
}

// Product詳細を取得
export async function getProductById(id: string): Promise<ProductDetail | null> {
  try {
    const data = await client.get<CMSProduct>({
      endpoint: 'products',
      contentId: id,
    })
    return transformToProductDetail(data)
  } catch (error) {
    console.error(error)
    return null
  }
}

// 全ProductのIDを取得（静的生成用）
export async function getAllProductIds(): Promise<string[]> {
  const data = await client.getList<CMSProduct>({
    endpoint: 'products',
    queries: {
      fields: 'id',
      limit: 100,
    },
  })
  return data.contents.map((product) => product.id)
}
