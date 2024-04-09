import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Data } from '@/components/constant/portfolio'
import { PortfolioItem } from '@/components/constant/portfolio'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


interface Description {
  [key: string]: string;
}

const CardsWorks = () => {
  const t = useTranslations('projects')
  const locale = useLocale() // Accedemos al idioma actual directamente
  const [currentLocale, setCurrentLocale] = useState<string>(locale); // Estado para manejar el idioma actual

  useEffect(() => {
    setCurrentLocale(locale); // Actualizamos el estado cuando cambia el idioma
  }, [locale])
  
  return (
    <>
      <div className='grid grid-cols-2 gap-5'>
        {Data.map(({ id, image, title, github, description }: PortfolioItem)=> (
          <div className='h-[554px] min-h-[554px] rounded-[50px_30px] relative isolate overflow-hidden' key={id}>
            <div className='absolute z-[3] w-full h-36 bottom-0 bg-gradient-to-b from-transparent to-black/40 filter backdrop-blur-md'>
              <div className='absolute left-[55px] bottom-[55px]'>
                <div className='flex items-center mb-3.5'>
                  <div className='text-[32px]'>
                    {title}
                    <span className='opacity-[0.6]'></span>
                  </div>
                  <div className='backdrop-blur-[10px] bg-[#ffffff1a] uppercase ml-3.5 p-[14px] rounded-[30px] cursor-pointer'>
                    <Link href={github}>
                      <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.230287 0.840139L0.230733 1.12092C0.231027 1.30679 0.381543 1.4573 0.567412 1.4576L7.6245 1.4668L0.203495 8.88782C0.0731982 9.01811 0.0735366 9.23166 0.204247 9.36237L0.402294 9.56042C0.533004 9.69113 0.746556 9.69147 0.876853 9.56117L8.29786 2.14016L8.30905 9.19924C8.30934 9.38511 8.45986 9.53562 8.64573 9.53592L8.92651 9.53636C9.11238 9.53665 9.26242 9.38662 9.26212 9.20075L9.25087 0.854433C9.25058 0.668564 9.10006 0.518049 8.91419 0.517754L0.567882 0.506506C0.378058 0.506205 0.229993 0.65427 0.230287 0.840139Z' fill='currentColor'></path></svg>
                    </Link>
                  </div>
                </div>
                <div className='text-base'>{(description as Description)[currentLocale]}</div>
              </div>
            </div>
            <div className='h-full w-full absolute inset-0 card-skills'>
              <Image
                src={image} 
                alt='background card image'
                layout='fill'
                objectFit='cover'
                className='object-cover w-full h-full lazy-image' 
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center w-full mt-6'>
        <button className='relative inline-block p-px font-semibold leading-6 no-underline shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900 uppercase '>
          <span
            className='absolute inset-0 overflow-hidden rounded-xl'>
              <span
                className='absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
              </span>
          </span>
          <div
            className='relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 '>
            <span>
              <Link 
                href='https://github.com/lorenzo-mm?tab=repositories' 
                target='_blank' 
                aria-label='Follow me on Github'
              >
                {t('button')}
              </Link>
            </span>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'
              data-slot='icon' className='w-6 h-6'>
              <path fill-rule='evenodd'
                d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                clip-rule='evenodd'>
              </path>
            </svg>
          </div>
          <span
            className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40'>
          </span>
        </button>
      </div>
    </>
  )
}

export default CardsWorks
