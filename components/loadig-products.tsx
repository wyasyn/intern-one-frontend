import React from 'react'
import { Skeleton } from './ui/skeleton'

export default function LoadingSkeleton() {
  const skeletonArray = Array(8).fill(0)
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {skeletonArray.map((_, index) => (
        <Skeleton
          className='aspect-square w-full rounded-xl md:aspect-[3/4]'
          key={index}
        />
      ))}
    </div>
  )
}
