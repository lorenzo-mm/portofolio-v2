'use client'

import CardHello from './Bento/CardHello'
import CardHelloRight from './Bento/CardHello-right'

export default function HelloContainer () {
  return (
    <div className='grid grid-cols-13 gap-5 mt-36 isolate overflow-hidden relative border-[2px] border-solid border-[rgb(248,0,0)]'>
        <CardHello />
        <CardHelloRight />
    </div>
  )
}