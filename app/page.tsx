import Profile from '@/components/home/Profile'
import Products from '@/components/home/Products'
import Posts from '@/components/home/Posts'
import Contact from '@/components/layout/Contact'
import { getProducts } from '@/lib/microcms'

export default async function Home() {
  const { products } = await getProducts()

  return (
    <>
      <Profile />
      <Products products={products} />
      <Posts />
      <Contact />
    </>
  )
}
