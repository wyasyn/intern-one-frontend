import BackBtn from '@/components/back-button'
import StarRating from '@/components/start-rating'
import { Button } from '@/components/ui/button'
import { getProductBySlug } from '@/constants/shoe-data'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = getProductBySlug(slug)
  if (!product) notFound()
  return (
    <div className='container my-[7rem]'>
      <BackBtn />
      <div className='mt-8 flex flex-col items-start gap-[5rem] md:flex-row'>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            placeholder='blur'
            blurDataURL={product.image.blurDataURL}
            className='max-w-[400px] rounded-lg object-cover'
          />
        </div>
        <div>
          <h1 className='font-serif text-5xl text-foreground'>
            {product.name}
          </h1>
          <p className='my-5'>
            {product.currency} {product.price}
            {product.stockQuantity > 0 && (
              <span className='ml-2 text-sm text-green-500'>In stock</span>
            )}
            {product.stockQuantity === 0 && (
              <span className='ml-2 text-sm text-red-500'>Out of stock</span>
            )}
          </p>
          <div className='flex items-center gap-4'>
            <StarRating rating={product.rating} />{' '}
            <span>({product.rating})</span>
          </div>

          <p className='my-8 max-w-[40ch] text-sm text-muted-foreground'>
            {product.description}
          </p>
          <Button
            disabled={product.stockQuantity === 0}
            size='sm'
            className='items-center gap-3'
          >
            <ShoppingCart size={16} />
            Add to cart
            {product.stockQuantity === 0 && (
              <span className='ml-2 text-xs text-red-500'>(Sold out)</span>
            )}
            {product.stockQuantity > 0 && product.stockQuantity < 10 && (
              <span className='ml-2 text-xs text-red-500'>(Limited stock)</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
