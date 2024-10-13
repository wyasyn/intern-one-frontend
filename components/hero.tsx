import Image from 'next/image'
import { images } from '@/constants/images'
import DiscountCard from './discount-card'
import ShopNowBtn from './shop-now-btn'

export default function Hero() {
  return (
    <section>
      <div className='container flex flex-col gap-8 md:flex-row-reverse'>
        <div className='relative flex-1'>
          <DiscountCard />
          <Image
            src={images.heroImg}
            alt='hero image'
            priority
            className='object-contain object-top md:object-cover'
          />
        </div>
        <div className='flex-1'>
          <p className='font-mono'>Find Your Perfect Fit</p>
          <h1 className='max-w-[15ch] text-balance font-serif text-4xl font-bold md:text-5xl'>
            Shop Top Brand Sneakers Now!
          </h1>
          <p className='my-5 max-w-[40ch] text-muted-foreground'>
            Step up your style with premium sneakers from top brands like Nike,
            Adidas, Puma, and more.
          </p>
          <ShopNowBtn />
        </div>
      </div>
    </section>
  )
}
