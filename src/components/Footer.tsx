import React from 'react'
import { useTranslations } from 'next-intl'


export default function Footer() {
  const t = useTranslations('Footer')

  return <div>{t('copyright')}</div>

}