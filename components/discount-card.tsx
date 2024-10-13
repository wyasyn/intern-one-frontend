export default function DiscountCard() {
  return (
    <div className='absolute left-0 top-[10%] z-10 h-[100px] w-[200px] shrink-0 overflow-hidden rounded-lg border'>
      <div className='absolute -left-5 -top-5 h-11 w-11 rounded-full bg-cyan-400' />
      <div className='absolute -bottom-5 -right-5 h-11 w-11 rounded-full bg-indigo-400' />
      <div className='absolute inset-0 h-full w-full rounded-md bg-white/10 p-2 backdrop-blur-lg'>
        <h2 className='text-foreground'>50% Off Sale</h2>
        <p className='text-sm text-muted-foreground'>
          Get up to 50% off on all branded sneakers.
        </p>
      </div>
    </div>
  )
}
