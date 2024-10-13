import React from 'react'

import { SneakerProduct } from '@/constants/shoe-data'
import StarRating from './start-rating'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  product: SneakerProduct
}

const ProductCard = ({ product }: ProductCardProps) => {
  const ratio = product.image.height / product.image.width
  const galleryHeight = Math.ceil(250 * ratio)
  const photoSpan = Math.ceil(galleryHeight / 10) + 1

  return (
    <div
      className='w-[250px] justify-self-center shadow-sm'
      style={{
        gridRow: `span ${photoSpan}`
      }}
    >
      <Link
        href={`/product/${product.slug}`}
        className='grid place-content-center'
      >
        <div className='group relative overflow-clip rounded-lg'>
          {product.stockQuantity > 0 && product.stockQuantity < 10 ? (
            <Badge
              className='absolute right-4 top-4 z-20'
              variant='destructive'
            >
              {product.stockQuantity} items left
            </Badge>
          ) : (
            product.stockQuantity === 0 && (
              <Badge
                className='absolute right-4 top-4 z-20'
                variant='destructive'
              >
                Out of stock
              </Badge>
            )
          )}
          <Image
            src={product.image}
            alt={product.name}
            placeholder='blur'
            blurDataURL={product.image.blurDataURL}
            className='h-full w-full rounded-2xl object-cover object-center duration-300 ease-in-out group-hover:scale-105'
          />
          <article className='absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black to-transparent p-4 text-muted-foreground'>
            <div className='flex items-center justify-between gap-3'>
              <StarRating rating={product.rating} />
              {product.isNew && (
                <Badge className='bg-primary text-white'>New</Badge>
              )}
            </div>

            <h3 className='truncate font-medium text-white dark:text-foreground'>
              {product.name}
            </h3>
            <div className='flex items-center justify-between gap-6 text-xs'>
              <span>
                {product.currency} {product.price}
              </span>
              <Button size='sm' variant='outline' className='text-xs'>
                View details
              </Button>
            </div>
          </article>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
