import { notFound } from 'next/navigation'
import Contact from '@/components/layout/Contact'
import ProductDetailContent from '@/components/products/ProductDetailContent'
import { getProductById, getAllProductIds } from '@/lib/microcms'

// 静的生成用のパラメータを生成
export async function generateStaticParams() {
  const ids = await getAllProductIds()
  return ids.map((id) => ({ id }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  // 前後のProduct IDを取得
  const allIds = await getAllProductIds()
  const currentIndex = allIds.indexOf(id)
  const prevId = currentIndex > 0 ? allIds[currentIndex - 1] : null
  const nextId = currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : null

  return (
    <>
      <ProductDetailContent product={product} prevId={prevId} nextId={nextId} />
      <Contact />
    </>
  )
}
