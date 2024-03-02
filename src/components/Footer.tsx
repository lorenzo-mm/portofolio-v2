import React from 'react'
import { useTranslations } from 'next-intl'


export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <div className='flex justify-center items-center text-lg my-10 text-white'>
    {t('copyright')}
  </div> 
  )
}