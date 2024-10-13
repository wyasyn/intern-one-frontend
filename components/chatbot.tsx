'use client'
import {
  Loader2,
  MessageSquareText,
  SendHorizontal,
  Store,
  User,
  X
} from 'lucide-react'
import { Button } from './ui/button'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useChatContext } from '@/context/Chat-context'

import axios from 'axios'
import { useToast } from './hooks/use-toast'
import { ToastAction } from './ui/toast'

const backendApi = process.env.NEXT_PUBLIC_URL

// Define the chat message type
interface ChatMessage {
  sender: 'user' | 'bot'
  text: string
}

export default function Chatbot() {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const {
    message,
    setMessage,
    chatHistory,
    setChatHistory,
    loading,
    setLoading
  } = useChatContext()
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  // Handle form submission and message sending
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!message.trim()) return

    // Ensure prevChat is typed correctly
    setChatHistory((prevChat: ChatMessage[]) => [
      ...prevChat,
      { sender: 'user', text: message }
    ])

    try {
      setLoading(true)
      const res = await axios.post(`${backendApi}/chat`, { message })
      setChatHistory((prevChat: ChatMessage[]) => [
        ...prevChat,
        { sender: 'bot', text: res.data.answer }
      ])
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error fetching response',
        description: `${error}`,
        action: <ToastAction altText='Try again'>Try again</ToastAction>
      })
      console.error('Error fetching response:', error)
      setChatHistory((prevChat: ChatMessage[]) => [
        ...prevChat,
        { sender: 'bot', text: 'Sorry, something went wrong.' }
      ])
    } finally {
      setLoading(false)
      setMessage('')
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatHistory])

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
            className='flex max-h-[450px] min-h-[400px] w-[320px] flex-col justify-end overflow-hidden rounded-lg bg-card/75 shadow-md backdrop-blur-lg md:min-h-[450px]'
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
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={` ${chat.sender === 'user' ? 'mr-auto' : 'ml-auto'} flex items-start gap-2`}
                >
                  {chat.sender === 'user' && (
                    <div>
                      <User size={18} />
                    </div>
                  )}

                  <p
                    className={`w-fit rounded-md p-2 ${chat.sender === 'user' ? 'border bg-card text-muted-foreground' : 'bg-primary/15 text-foreground'}`}
                  >
                    {chat.text}
                  </p>
                  {chat.sender === 'bot' && (
                    <div>
                      <Store size={18} />
                    </div>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form
              className='flex flex-col items-end gap-2 p-3'
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                placeholder='Enter your query...'
                autoComplete='Sneaker-queries'
                value={message}
                onChange={e => setMessage(e.target.value)}
                className='w-full rounded-md border bg-transparent px-4 py-2 focus:border-primary focus:outline-none'
              />
              <Button
                className='w-fit'
                variant='default'
                size='sm'
                type='submit'
                disabled={message.length === 0 || loading}
              >
                {loading ? (
                  <Loader2 size={18} className='animate-spin' />
                ) : (
                  <SendHorizontal size={18} />
                )}
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
              <span className='absolute -right-4 -top-5 animate-wave text-lg'>
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
