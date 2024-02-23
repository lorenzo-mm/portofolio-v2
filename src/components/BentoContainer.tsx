'use client'

import CardHello from './Bento/CardHello'
import CardHelloRight from './Bento/CardHello-right'
import Projects from './Bento/Projects'
import SkillsCard from './Bento/Skills'
import ContactCard from './Bento/Contact'

export default function BentoContainer () {

  return (
    <div>
      <CardHello />
      <CardHelloRight />
      <Projects />
      <SkillsCard />
      <ContactCard />
    </div>
  )
}
