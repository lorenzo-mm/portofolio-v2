import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

const SkillsCard = () => {
  const t = useTranslations('Skills')
  return (
    <div id="skills" className="card-skills">
      <div className="card-skills-text">
        <div className="card-skills-subtitle">{t('card-skills-subtitle')}</div>
        <div className="card-skills-title">{t('card-skills-title')}</div>
        <div className="card-skills-description">{t('card-skills-description')}</div>
      </div>
      <Image
        height="1"
        width="1"
        src="/images/card-skills-background.png"
        alt="Card Skills Background"
        className="lazy-image card-skills-background lazy-image-loaded"
      />
      <div className="card-skills-tree">
        <div className="card-skills-tree-inner">
          <Image
            height="1"
            width="1"
            src="/images/card-skills-tree-row.png"
            alt="Card Skills Tree Row"
            className="lazy-image card-skills-tree-row lazy-image-loaded"
          />
          <Image
            height="1"
            width="1"
            src="/images/card-skills-tree-row.png"
            alt="Card Skills Tree Row"
            className="lazy-image card-skills-tree-row lazy-image-loaded"
          />
          <Image
            height="1"
            width="1"
            src="/images/card-skills-tree-row.png"
            alt="Card Skills Tree Row"
            className="lazy-image card-skills-tree-row lazy-image-loaded"
          />
          <Image
            height="1"
            width="1"
            src="/images/card-skills-tree-row.png"
            alt="Card Skills Tree Row"
            className="lazy-image card-skills-tree-row lazy-image-loaded"
          />
          <Image
            height="1"
            width="1"
            src="/images/card-skills-tree-row.png"
            alt="Card Skills Tree Row"
            className="lazy-image card-skills-tree-row lazy-image-loaded"
          />
        </div>
      </div>
    </div>
  )
}

export default SkillsCard
