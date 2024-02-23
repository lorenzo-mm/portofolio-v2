import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import UseAnimations from 'react-useanimations'
import Github from 'react-useanimations/lib/github'
import Linkedin from 'react-useanimations/lib/linkedin'
import Twitter from '@/../../public/logo-x.gif'
import CardHelloBg from '@/../../public/card-hello-background.png'
import Memoji from '@/../../public/memoji.png'

export default function CardHello() {
  const t = useTranslations('CardHello')

  return (
    <div className='rounded-tl-30 rounded-tr-50 rounded-br-30 rounded-bl-50'>
      <Image 
        src={CardHelloBg} 
        alt='Card hello background' 
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[63.125rem] h-[63.125rem] pointer-events-none animate-[rotatecardHelloBackground_100s_linear_infinite] z-[1]'
        width='1' 
        height='1' 
      />
      <div className='items-center flex justify-between relative z-[2] mb-[39px]'>
        <div className='flex items-center'>
          <Image 
            src={Memoji} 
            alt='Card hello memoji' 
            className='h-12 w-12 mr-6' 
            width='1' 
            height='1' 
          />
          <div className='card-hello-top-me-text'>
            <div className='text-xl mb-0.5'>{t('card-hello-top-me-title')}</div>
            <div className='text-sm opacity-[0.32]'>{t('card-hello-top-me-role')}</div>
          </div>
        </div>
        <div className='flex items-center'>
          <Link 
            href='https://twitter.com/lorendev_' 
            target='_blank' 
            aria-label='Follow me on Twitter'
            className='flex items-center justify-center relative w-10 h-10 text-white rounded-md'
          >
            <Image src={Twitter} alt='Logo X' width='25' height='20' />
          </Link>
          <Link 
            href='https://www.linkedin.com/in/lorenzo-mmuñoz/' 
            target='_blank' 
            aria-label='Connect with me on LinkedIn' 
            className='flex items-center justify-center relative w-10 h-10 text-white rounded-md'
          >
            <UseAnimations animation={Linkedin} strokeColor='#fff' />
          </Link>
          <Link 
            href='https://github.com/lorenzo-mm' 
            target='_blank' 
            aria-label='Follow me on Github' 
            className='flex items-center justify-center relative w-10 h-10 text-white rounded-md'
          >
            <UseAnimations animation={Github} strokeColor='#fff' />
          </Link>
        </div>
      </div>
      <div className='text-[56px] max-w-[600px] mb-[26px]'>{t('card-hello-title')}</div>
      <div className='text-xl leading-[34px] max-w-[483px] opacity-60'>{t('card-hello-description')}</div>
    </div>
  )
}
