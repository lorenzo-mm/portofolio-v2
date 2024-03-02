import React from 'react'
import Image from 'next/image'

import Hello from '@/../../public/hello.webp'

const CardHelloRight = () => {

  return (
    <div className='bg-[#1B5E20] rounded-[50px_30px] col-[9/13] isolate overflow-hidden relative'>
      <div className='h-full transition-transform duration-450'>
        <Image 
          src={Hello} 
          className='h-80 w-full object-contain object-[bottom_center] relative z-[6]' 
          alt='Card hello right memoji'
        />
        <div className='card-hello-right-circles'>
          <div className='card-hello-right-circle' id='0'></div>
          <div className='card-hello-right-circle' id='1'></div>
          <div className='card-hello-right-circle' id='2'></div>
          <div className='card-hello-right-circle' id='3'></div>
          <div className='card-hello-right-circle' id='4'></div>
        </div>
        {/*
        <div className='star-animation star-animation-loaded' id='star-animation-2'>
          <canvas data-generated='true' style={{ width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden='true' width='392' height='457'></canvas>
        </div>
        */}
      </div>
    </div>
  )
}

export default CardHelloRight
