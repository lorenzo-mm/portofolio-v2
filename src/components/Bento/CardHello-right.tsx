import React from 'react'
import Image from 'next/image';

const CardHelloRight = () => {
  return (
    <div className="card-hello-right" id="d">
      <div 
        className="card-hello-right-content" 
        id="e" 
        style={{ transition: 'transform 450ms ease 0s', transform: 'translateY(20px)' }}
      >
        <Image 
          src="/images/card-hello-right-memoji.png" alt="Card hello right memoji" className="card-hello-right-memoji" 
        />
        <div className="card-hello-right-circles">
          <div className="card-hello-right-circle" key="0"></div>
          <div className="card-hello-right-circle" key="1"></div>
          <div className="card-hello-right-circle" key="2"></div>
          <div className="card-hello-right-circle" key="3"></div>
          <div className="card-hello-right-circle" key="4"></div>
        </div>
        {/* <!--qv q:id=f q:key=XthG:2B_0--><!--qv -->
        <div className="star-animation star-animation-loaded" id="star-animation-2">
          <canvas data-generated="true" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true" width="392" height="457"></canvas>
        </div>
        <!--/qv-->
        <!--/qv--> */}
      </div>
    </div>
  );
};

export default CardHelloRight
