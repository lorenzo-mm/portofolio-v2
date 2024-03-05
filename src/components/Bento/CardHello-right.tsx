import React from 'react'
import Image from 'next/image'

import Hello from '@/../../public/hello.webp'

const CardHelloRight = () => {

  return (
    <div className='bg-[#1B5E20] rounded-[50px_30px] col-[9/13] isolate overflow-hidden relative '>
      <div className='h-full duration-450'>
        <Image 
          src={Hello} 
          className='h-80 w-full object-contain top-[8.5rem] relative z-[6]' 
          alt='Card hello right memoji'
        />
        <div className='bottom-0 left-1/2 absolute'>
          <div className='card-hello-right-circle'></div>
          <div className='card-hello-right-circle'></div>
          <div className='card-hello-right-circle'></div>
          <div className='card-hello-right-circle'></div>
          <div className='card-hello-right-circle'></div>
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
