'use client'

import CardHello from './Bento/CardHello'
import CardHelloRight from './Bento/CardHello-right'

export default function HelloContainer () {
  return (
    <div className=' grid grid-cols-13 gap-5 mt-36  rounded-[10px] border-[3px] border-solid border-[rgb(0,248,0)]'>
        <CardHello />
        <CardHelloRight />
    </div>
  )
}