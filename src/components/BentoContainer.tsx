'use client'

import Projects from './Bento/Projects'
import SkillsCard from './Bento/Skills'
import ContactCard from './Bento/Contact'

export default function BentoContainer () {

  return (
    <>
      <div>
        <Projects />
      </div>
      <div className='grid grid-cols-13 gap-5 mt-1'>
        <SkillsCard />
        <ContactCard />
      </div>
    </>
  )
}
