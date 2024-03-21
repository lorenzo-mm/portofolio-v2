'use client'
// import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
  // const t = useTranslations('NotFoundPage')
  return (
    // <body className='text-center'>
      <div className='text-center'>
        <div className='absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2'>
          <h1 className='flex flex-col absolute mt-10 text-9xl m-0 font-extralight uppercase'>Oops!</h1>
          <h2 className='text-2xl font-normal uppercase bg-white py-2 px-1 m-auto inline-block absolute bottom-0 left-0 right-0'>404 - The Page can't be found</h2>
        </div>
        <button type='button' className=''>
          <Link href='#' className=''>Go To Homepage</Link>
        </button>
      </div>
    // </body>
  )
}