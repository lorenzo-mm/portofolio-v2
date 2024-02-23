import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

const SkillsCard = () => {
  const t = useTranslations('Skills')
  return (
    <div id='skills' className='items-center flex col-[1/10] p-[55px] rounded-[50px_30px_30px_50px]'>
      <div className='max-w-[260px]'>
        <div className='mb-3.5'>{t('card-skills-subtitle')}</div>
        <div className='text-[32px] mb-[26px]'>{t('card-skills-title')}</div>
        <div className='text-xl leading-7 opacity-50'>{t('card-skills-description')}</div>
      </div>
      <Image
        height='1'
        width='1'
        src='/images/card-skills-background.png'
        alt='Card Skills Background'
        className='lazy-image card-skills-background lazy-image-loaded'
      />
      <div className='h-[386px] overflow-hidden absolute right-[-100px] w-[752px]'>
        <div className='flex rotate-[15deg]'>
          <Image
            height='1'
            width='1'
            src='/images/card-skills-tree-row.png'
            alt='Card Skills Tree Row'
            className='lazy-image card-skills-tree-row lazy-image-loaded'
          />
          <Image
            height='1'
            width='1'
            src='/images/card-skills-tree-row.png'
            alt='Card Skills Tree Row'
            className='lazy-image card-skills-tree-row lazy-image-loaded'
          />
          <Image
            height='1'
            width='1'
            src='/images/card-skills-tree-row.png'
            alt='Card Skills Tree Row'
            className='lazy-image card-skills-tree-row lazy-image-loaded'
          />
          <Image
            height='1'
            width='1'
            src='/images/card-skills-tree-row.png'
            alt='Card Skills Tree Row'
            className='lazy-image card-skills-tree-row lazy-image-loaded'
          />
          <Image
            height='1'
            width='1'
            src='/images/card-skills-tree-row.png'
            alt='Card Skills Tree Row'
            className='lazy-image card-skills-tree-row lazy-image-loaded'
          />
        </div>
      </div>
    </div>
  )
}

export default SkillsCard
