import React from 'react'
import { useTranslations } from 'next-intl'


export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <div className='flex justify-center items-center text-lg my-10 text-[rgba(255,255,255,0.40)]'>
    {t('copyright')}
  </div> 
  )
}