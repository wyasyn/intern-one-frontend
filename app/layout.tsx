import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'

import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

import './globals.css'
import Chatbot from '@/components/chatbot'
import { ChatProvider } from '@/context/Chat-context'
import { Toaster } from '@/components/ui/toaster'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Sneaker - Step Up Your Style with Premium Sneakers',
  description:
    'Explore a wide range of premium sneakers from top brands like Nike, Adidas, Puma, and more. Shop the latest collections for men, women, and kids. Find exclusive deals, new arrivals, and limited-edition sneakers. Fast delivery and secure checkout.',
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    type: 'website',
    url: 'https://sneaker.com',
    title: 'Sneaker - Step Up Your Style with Premium Sneakers',
    description:
      'Explore a wide range of premium sneakers from top brands like Nike, Adidas, Puma, and more. Shop the latest collections for men, women, and kids. Find exclusive deals, new arrivals, and limited-edition sneakers. Fast delivery and secure checkout.',
    images: [
      {
        url: '/open-graph.jpg',
        width: 1200,
        height: 630
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <ChatProvider>
        <body
          className={cn(
            'flex min-h-screen flex-col',
            geistSans.variable,
            geistMono.variable,
            inter.variable,
            playfair.variable
          )}
        >
          <Providers>
            <Header />
            <main className='grow'>{children}</main>
            <Chatbot />
            <Footer />
            <Toaster />
          </Providers>
        </body>
      </ChatProvider>
    </html>
  )
}
