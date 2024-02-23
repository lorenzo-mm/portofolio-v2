import React from 'react'
import Link from 'next/link'

import { useTranslations } from 'next-intl'
import { links } from '@/lib/links'

import BtnDarkMode from '@/components/ui/BtnDarkMode'
import LanguageButton from '@/components/ui/BtnLang'


export default function Header() {
  const t = useTranslations('Header')

  return <header className='z-[999] relatve'>
    <div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shodw-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full'>
      <nav className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm.gap-5'>
        <div className='flex'>
          <div>{t('header-me-name')}</div>
          <div>{t('header-me-role')}</div>
        </div>
        <ul className='flex '>
          {
            links.map(link => (
                <li key={link.hash}>
                  <Link href={link.hash}>{link.title}</Link>
                </li>
              ))
          }
          {/* <li><Link href='#Present' aria-label='Go to Present section' />{t('present')}</li>
          <li><Link href='#Skills' aria-label='Go to Skills section' />{t('skills')}</li>
          <li><Link href='#Contact' aria-label='Go to Contact section' />{t('contact')}</li> */}
        </ul>
        <BtnDarkMode />
        <LanguageButton />
      </nav>
    </div>
  </header>
}
