import Link from 'next/link'

import { ThemeToggle } from '@/components/theme-toggle'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'

import { Menu, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/20 py-6 backdrop-blur-sm'>
      <nav className='container flex items-center justify-between'>
        {/* <Sheet>
          <SheetTrigger className='sm:hidden'>
            <Menu className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent side='left'>
            <ul className='flex flex-col gap-3 text-sm'>
              <li className='font-sans text-2xl'>
                <SheetClose asChild>
                  <Link href='/' className='font-serif'>
                    Sneakers
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet> */}

        <Link
          className='flex items-center gap-2 font-serif text-lg font-medium'
          href='/'
        >
          <Image src='/sneaker-logo.png' alt='logo' width={24} height={24} />{' '}
          <span className='hidden sm:block'>Sneakers</span>
        </Link>

        {/* <ul className='hidden items-center gap-14 text-sm font-medium sm:flex'>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul> */}

        <div className='flex items-center justify-end gap-6'>
          <ThemeToggle />
          <Button variant='ghost' size='icon'>
            <ShoppingCart size={16} />
          </Button>
        </div>
      </nav>
    </header>
  )
}
