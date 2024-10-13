import Hero from '@/components/hero'
import LoadingSkeleton from '@/components/loadig-products'
import ProductList from '@/components/product-list'
import { Suspense } from 'react'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <Hero />
      <div className='container mt-4' id='popular'>
        <h2 className='mb-8 font-serif text-4xl font-bold text-foreground'>
          Popular Shoes
        </h2>
        <Suspense fallback={<LoadingSkeleton />}>
          <ProductList />
        </Suspense>
      </div>
    </section>
  )
}
