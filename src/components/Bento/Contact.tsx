import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Twitter from '@/../../public/logo-x.gif'
import Hi from '@/../../public/Hi.webp'

import { useTranslations } from 'next-intl'

const ContactCard = () => {
  const t = useTranslations('Contact')
  
  return (
    <div id='contact' className='col-[10/13] p-[38px] rounded-[30px_50px_50px_30px]'>
      <div className='card-contact-text'>
        <div className='text-[28px] mb-2'>{t('card-contact-title')}</div>
        <div 
          className='text-base leading-[22px] max-w-[170px] opacity-70 mb-[38px]'
        >
          {t('card-contact-description')}
        </div>
        <div 
          className='border w-max rounded-[5px] border-solid border-[rgba(255,255,255,0.1)]'
        >
          <Link 
            href='mailto:cepo_mm@hotmail.com' 
            aria-label='Mail me' 
            className='items-center flex h-[70px] justify-center transition-[0.45s] duration-[cubic-bezier(.6,0.6,0,1)] ease-[background-color] w-[70px] first:border-b-[rgba(255,255,255,0.15)] first:border-b first:border-solid'
          >
            <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M14 0.4375C6.50459 0.4375 0.4375 6.50338 0.4375 14C0.4375 21.4954 6.50338 27.5625 14 27.5625C16.8943 27.5625 19.7247 26.6285 22.0441 24.9201C22.3449 24.6985 22.3954 24.268 22.1587 23.9788L21.8812 23.6399C21.6614 23.3714 21.2691 23.3181 20.9894 23.5234C18.9727 25.0036 16.5142 25.8125 14 25.8125C7.47179 25.8125 2.1875 20.5293 2.1875 14C2.1875 7.47168 7.4707 2.1875 14 2.1875C20.4775 2.1875 25.8125 6.56381 25.8125 13.125C25.8125 17.1102 22.924 19.0444 19.4652 19.0444C18.386 19.0444 18.1694 18.4529 18.3986 17.1923L20.1525 8.21964C20.2317 7.81435 19.9213 7.4375 19.5084 7.4375H18.8291C18.6767 7.4375 18.5291 7.49054 18.4115 7.58751C18.294 7.68448 18.2138 7.81934 18.1849 7.96895C18.0594 8.61678 18.0284 8.70527 17.9737 9.37152C17.3323 7.8907 15.8606 7.0187 13.961 7.0187C10.2399 7.0187 6.67795 10.4613 6.67795 15.6061C6.67795 18.9742 8.53267 20.9849 11.6394 20.9849C13.812 20.9849 15.5004 19.6571 16.3771 18.4155C16.3109 19.9351 17.3317 20.724 18.8914 20.724C24.7783 20.724 27.5625 17.5946 27.5625 13.125C27.5625 5.67733 21.5394 0.4375 14 0.4375ZM11.9263 19.1749C9.92026 19.1749 8.72266 17.8018 8.72266 15.5018C8.72266 11.4172 11.4989 8.85478 14.0392 8.85478C16.1642 8.85478 17.2167 10.3745 17.2167 12.4497C17.2167 15.6288 15.1184 19.1749 11.9263 19.1749Z' fill='white' />
            </svg>
          </Link>
          <Link 
            href='https://twitter.com/lorendev_' 
            aria-label='DM me on twitter' 
            className='items-center flex h-[70px] justify-center transition-[0.45s] duration-[cubic-bezier(.6,0.6,0,1)] ease-[background-color] w-[70px] first:border-b-[rgba(255,255,255,0.15)] first:border-b first:border-solid'
          >
            <Image src={Twitter} alt='Twitter' width='28' height='28' />
          </Link>
        </div>
      </div>
      <Image
        height='1'
        width='1'
        src={Hi}
        alt='Memoji'
        className='lazy-image card-contact-memoji lazy-image-loaded'
      />
    </div>
  )
}

export default ContactCard
