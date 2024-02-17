import React from 'react'
import { useTranslations } from 'next-intl'


export default function Header() {
  const t = useTranslations('Header')

  return <div>{t('header-me-name')}</div>
}