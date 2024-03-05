import { useTranslations } from 'next-intl'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// import Portfolio from '@/Links/portfolio'

const CardsWorks = () => {
  const t = useTranslations('Projects')

  return (
    <div className='grid gap-5 col-[span_12] grid-cols-[repeat(2,1fr)] relative'>
      <div className='card-work swiper-slide card-work-dark'>
        <div className='absolute z-[2] left-[55px] bottom-[55px]'>
          <div className='items-center flex mb-3.5'>
            <div className='text-[32px]'>
                {t('card-work-title-domain')}
              <span className='card-work-title-domain-name'>{t('card-work-title-domain-name')}</span>
            </div>
            <div className='backdrop-blur-[10px] bg-[#ffffff1a] text-[10px] uppercase ml-3.5 pt-[5px] pb-1 px-2.5 rounded-[20px] '>{t('card-work-soon')}</div>
          </div>
          <div className='text-white text-base'>{t('card-work-description')}</div>
        </div>
        <Image 
          height='1' 
          width='1' 
          src='' 
          alt='Background of Wope card' 
          className='lazy-image card-work-background lazy-image-loaded' 
        />
        <Image 
          height='1' 
          width='1' 
          src='' 
          alt='Background of Wope card' 
          className='lazy-image card-work-background card-work-background-blur lazy-image-loaded' 
        />
      </div>
      <div className='card-work swiper-slide card-work-dark'>
        <div className='absolute z-[2] left-[55px] bottom-[55px]'>
          <div className='items-center flex mb-3.5'>
            <div className='text-[32px]'>
                {t('card-work-title-domain')}
              <span className='card-work-title-domain-name'>
                {t('card-work-title-domain-name')}
              </span>
            </div>
            <div 
              className='backdrop-blur-[10px] 
              bg-[#ffffff1a] 
              text-[10px] 
              uppercase 
              ml-3.5 
              pt-[5px] 
              pb-1 
              px-2.5 
              rounded-[20px]'
            >
              {t('card-work-soon')}
            </div>
          </div>
          <div className='text-white text-base'>
            {t('card-work-description')}
          </div>
        </div>
        <Image 
          height='1' 
          width='1' 
          src='' 
          alt='Background of Wope card' 
          className='lazy-image card-work-background lazy-image-loaded' 
        />
        <Image 
          height='1' 
          width='1' 
          src='' 
          alt='Background of Wope card' 
          className='lazy-image card-work-background card-work-background-blur lazy-image-loaded' 
        />
      </div>

      <div className='card-work swiper-slide card-work-light'>
        <div className='absolute z-[2] left-[55px] bottom-[55px]'>
          <div className='items-center flex mb-3.5'>
            <div className='text-[32px]'>
                {t('card-work-title-domain')}
              <span className='card-work-title-domain-name'>
                {t('card-work-title-domain-name')}
              </span>
            </div>
            <Link href='' target='_blank' className='card-work-arrow'>
              <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0.230287 0.840139L0.230733 1.12092C0.231027 1.30679 0.381543 1.4573 0.567412 1.4576L7.6245 1.4668L0.203495 8.88782C0.0731982 9.01811 0.0735366 9.23166 0.204247 9.36237L0.402294 9.56042C0.533004 9.69113 0.746556 9.69147 0.876853 9.56117L8.29786 2.14016L8.30905 9.19924C8.30934 9.38511 8.45986 9.53562 8.64573 9.53592L8.92651 9.53636C9.11238 9.53665 9.26242 9.38662 9.26212 9.20075L9.25087 0.854433C9.25058 0.668564 9.10006 0.518049 8.91419 0.517754L0.567882 0.506506C0.378058 0.506205 0.229993 0.65427 0.230287 0.840139Z' fill='currentColor'></path>
              </svg>
            </Link>
          </div>
          <div className='text-white text-base'>{t('card-work-description')}</div>
        </div>
        <Image 
          height='1' 
          width='1' 
          src='' 
          alt='Background of Wope card' 
          className='lazy-image card-work-background lazy-image-loaded' 
        />
        <Image 
          height='1' 
          width='1' 
          src='' 
          alt='Background of Wope card' 
          className='lazy-image card-work-background card-work-background-blur lazy-image-loaded' 
        />
      </div>
    </div>
  )
}

export default CardsWorks
