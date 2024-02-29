import React from 'react'
import Image from 'next/image'

import Hello from '@/../../public/hello.webp'

const CardHelloRight = () => {

  return (
    <div className='col-[9/13] rounded-[50px_30px] bg-[#1B5E20]' id='d'>
      <div 
        className='h-full'
        id='e' 
        style={{ transition: 'transform 450ms ease 0s', transform: 'translateY(20px)' }}
      >
        <Image 
          src={Hello} 
          className='h-80 object-contain object-[bottom_center] relative w-full z-[6]' 
          alt='Card hello right memoji' 
        />
        <div className='card-hello-right-circles'>
          <div className='card-hello-right-circle' key='0'></div>
          <div className='card-hello-right-circle' key='1'></div>
          <div className='card-hello-right-circle' key='2'></div>
          <div className='card-hello-right-circle' key='3'></div>
          <div className='card-hello-right-circle' key='4'></div>
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
