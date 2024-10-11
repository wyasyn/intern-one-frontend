'use client'
import { MessageSquareText, SendHorizontal, Store, User, X } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const backendApi = process.env.NEXT_PUBLIC_URL

export default function Chatbot() {
  const [open, setOpen] = useState(false)

  return (
    <div className='fixed bottom-12 right-[8%] z-50 flex flex-col items-end gap-3 text-sm'>
      <AnimatePresence>
        {open ? (
          <motion.div
            key='chatbot'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
            className='flex max-h-[450px] min-h-[400px] w-[320px] flex-col justify-end overflow-hidden rounded-lg bg-card/75 shadow-md backdrop-blur-sm md:min-h-[450px]'
          >
            <header className='absolute left-0 right-0 top-0 flex items-center gap-4 bg-card/85 p-3 backdrop-blur-sm'>
              <div className='text-primary'>
                <MessageSquareText size={20} />
              </div>
              <div>
                <p>
                  Chat with <span>Ysyn</span>
                </p>
              </div>
              <Button
                variant='ghost'
                size='icon'
                className='group ml-auto'
                onClick={() => setOpen(false)}
              >
                <X
                  className='duration-300 ease-in-out group-hover:rotate-12'
                  size={16}
                />
              </Button>
            </header>
            <div className='mt-[4rem] flex flex-col gap-3 overflow-y-scroll p-3'>
              <div className='mr-auto flex items-start gap-2'>
                <div>
                  <User size={18} />
                </div>
                <p className='w-fit rounded-md border bg-card p-2 text-muted-foreground'>
                  hello
                </p>
              </div>

              <div className='ml-auto flex items-start gap-2'>
                <p className='w-fit rounded-md bg-blue-900/75 p-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  reiciendis.
                </p>
                <div>
                  <Store size={18} />
                </div>
              </div>
            </div>
            <form className='flex flex-col items-end gap-2 p-3'>
              <textarea
                placeholder='Enter your query...'
                autoComplete='Sneaker-queries'
                rows={2}
                className='w-full rounded-md border bg-transparent px-4 py-2 focus:border-primary focus:outline-none'
              />
              <Button
                className='w-fit'
                variant='default'
                size='sm'
                type='submit'
              >
                <SendHorizontal size={18} />
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key='button'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Button
              className='relative rounded-full'
              size='icon'
              onClick={() => setOpen(true)}
            >
              <span className='animate-wave absolute -right-4 -top-5 text-lg'>
                👋
              </span>
              <MessageSquareText size={20} />
              <span className='sr-only'>chatbot</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
