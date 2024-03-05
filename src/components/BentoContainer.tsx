'use client'

import Projects from './Bento/Projects'
import SkillsCard from './Bento/Skills'
import ContactCard from './Bento/Contact'

export default function BentoContainer () {

  return (
    <div className='grid grid-cols-13 gap-5'>
      <Projects />
      <SkillsCard />
      <ContactCard />
    </div>
  )
}
