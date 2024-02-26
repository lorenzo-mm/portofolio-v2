import React from 'react'
import { useTranslations } from 'next-intl'


export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <div className='flex justify-center items-center text-lg'>
    {t('copyright')}
  </div> 
  )
}