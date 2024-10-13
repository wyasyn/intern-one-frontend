'use client'
import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function BackBtn() {
  const router = useRouter()
  return (
    <Button
      variant='outline'
      size='icon'
      className='text-muted-foreground'
      onClick={() => router.back()}
    >
      <ChevronLeft size={24} />
      <span className='sr-only'>Back button</span>
    </Button>
  )
}
