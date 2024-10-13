import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='grid min-h-dvh place-items-center text-center'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <h2 className='font-serif text-5xl font-semibold'>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href='/'>
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
