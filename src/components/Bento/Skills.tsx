import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

import skills_bg from '../../../public/card-skills-background.png'
import skills_tree from '../../../public/card-skills-tree-row.png'

const SkillsCard = () => {
  const t = useTranslations('Skills')
  return (
    <div id='skills' className='flex items-center p-[55px] rounded-[50px_30px_30px_50px] col-[1/12] isolate overflow-hidden relative card-skills'>
      <div className='max-w-[280px]'>
        <div className='mb-3.5'>{t('card-skills-subtitle')}</div>
        <div className='text-[32px] mb-[26px]'>{t('card-skills-title')}</div>
        <div className='text-xl leading-7 opacity-50'>{t('card-skills-description')}</div>
      </div>
      <Image
        height='1'
        width='1'
        src={skills_bg}
        alt='Card Skills Background'
        className='card-skills-bg lazy-image'
      />
      <div className='card-skills-tree'>
        <div className='flex rotate-[15deg]'>
          <Image
            id='0'
            height='1'
            width='1'
            src={skills_tree}
            alt='Card Skills Tree Row'
            className='card-skills-bg lazy-image'
          />
          <Image
            id='1'
            height='1'
            width='1'
            src={skills_tree}
            alt='Card Skills Tree Row'
            className='card-skills-bg lazy-image'
          />
          <Image 
            id='2'
            height='1'
            width='1'
            src={skills_tree}
            alt='Card Skills Tree Row'
            className='card-skills-bg lazy-image'
          />
          <Image
            id='3'
            height='1'
            width='1'
            src={skills_tree}
            alt='Card Skills Tree Row'
            className='card-skills-bg lazy-image'
          />
          <Image
            id='4'
            height='1'
            width='1'
            src={skills_tree}
            alt='Card Skills Tree Row'
            className='card-skills-bg lazy-image'
          />
        </div>
      </div>
    </div>
  )
}

export default SkillsCard
