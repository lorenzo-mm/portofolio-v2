import React from 'react'
import Link from 'next/link'

import Links from '../Links/Links'

import BtnDarkMode from '@/components/ui/BtnDarkMode'
import LanguageButton from '@/components/ui/BtnLang'


export default function Header() {

  return (
    <nav className='z-[999] relatve'>
      <div 
        className='
          flex justify-between 
          items-center fixed 
          top-0 left-1/2 
          -translate-x-1/2 h-[4.5rem] 
          w-full my-16 text-xl
          rounded-none border shadow-md 
          backdrop-blur-[20px]
          backdrop-saturate-[180%]
          sm:h-[3.25rem] sm:w-[77.5rem] 
          sm:rounded-full sm:top-3.5 
          
        '
      >
        <div className='flex items-center justify-center ml-4'>
          <Link href='#' className='text-white'>Lorenzo</Link>
          <h2>, Frontend</h2>
        </div>
        <Links />
        <div className='flex flex-row items-center justify-center gap-2 mr-4'>
          <BtnDarkMode />
          <LanguageButton />
        </div>
      </div>
    </nav>
  )
}
