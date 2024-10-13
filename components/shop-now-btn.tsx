'use client'
import React from 'react'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ShopNowBtn() {
  const router = useRouter()
  return (
    <Button
      size='lg'
      className='flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 via-40% to-pink-500 text-white duration-300 ease-in-out hover:via-60%'
      onClick={() => router.push('/#popular')}
    >
      <ShoppingCart size={16} /> Shop Now
    </Button>
  )
}
