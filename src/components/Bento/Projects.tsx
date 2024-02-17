import { useTranslations } from 'next-intl'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CardsWorks = () => {
  const t = useTranslations('Contact')
  return (
    <div className="cards-works">
      {/* <!--qv q:id=h q:key=b7nS:/images/works/cryptosea.png--> */}
      <div className="card-work swiper-slide card-work-dark">
        <div className="card-work-heading">
          <div className="card-work-title">
            <div className="card-work-title-domain">
                cryptosea
              <span className="card-work-title-domain-name"></span>
            </div>
            <div className="card-work-soon">In Progress</div>
          </div>
          <div className="card-work-description">{/*< !--t=i-->Next gen bot for crypto-currencies.<!---->*/}</div>
        </div>
        {/* <!--qv q:id=j q:key=pd7A:p0_0--> */}
        <Image 
          height="1" 
          width="1" 
          src='' 
          alt="Background of Wope card" 
          className="lazy-image card-work-background lazy-image-loaded" 
        />
        {/* <!--/qv--> */}
        {/* <!--qv q:id=l q:key=pd7A:p0_1--> */}
        <Image 
          height="1" 
          width="1" 
          src='' 
          alt="Background of Wope card" 
          className="lazy-image card-work-background card-work-background-blur lazy-image-loaded" 
        />
        {/* <!--/qv--> */}
      </div>
      {/* <!--/qv--> */}

      {/* <!--qv q:id=n q:key=b7nS:/images/works/mintlify.png--> */}
      <div className="card-work swiper-slide card-work-dark">
        <div className="card-work-heading">
          <div className="card-work-title">
            <div className="card-work-title-domain">mintlify<span className="card-work-title-domain-name"></span></div>
            <div className="card-work-soon">In Progress</div>
          </div>
          <div className="card-work-description">{/*<!--t=o-->Meet the modern standard for public facing documentation.<!---->*/}</div>
        </div>
        {/* <!--qv q:id=p q:key=pd7A:p0_0--> */}
        <Image height="1" width="1" src='' alt="Background of Wope card" className="lazy-image card-work-background lazy-image-loaded" />
        {/* <!--/qv--> */}
        {/* <!--qv q:id=r q:key=pd7A:p0_1--> */}
        <Image height="1" width="1" src='' alt="Background of Wope card" className="lazy-image card-work-background card-work-background-blur lazy-image-loaded" />
        {/* <!--/qv--> */}
      </div>
      {/* <!--/qv--> */}

      {/* <!--qv q:id=t q:key=b7nS:/images/works/wiza.png--> */}
      <div className="card-work swiper-slide card-work-light">
        <div className="card-work-heading">
          <div className="card-work-title">
            <div className="card-work-title-domain">
                  wiza
                <span className="card-work-title-domain-name">.co</span>
            </div>
            <Link href='' target="_blank" className="card-work-arrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.230287 0.840139L0.230733 1.12092C0.231027 1.30679 0.381543 1.4573 0.567412 1.4576L7.6245 1.4668L0.203495 8.88782C0.0731982 9.01811 0.0735366 9.23166 0.204247 9.36237L0.402294 9.56042C0.533004 9.69113 0.746556 9.69147 0.876853 9.56117L8.29786 2.14016L8.30905 9.19924C8.30934 9.38511 8.45986 9.53562 8.64573 9.53592L8.92651 9.53636C9.11238 9.53665 9.26242 9.38662 9.26212 9.20075L9.25087 0.854433C9.25058 0.668564 9.10006 0.518049 8.91419 0.517754L0.567882 0.506506C0.378058 0.506205 0.229993 0.65427 0.230287 0.840139Z" fill="currentColor"></path>
              </svg>
            </Link>
          </div>
          <div className="card-work-description">{/*<!--t=v-->Sales tool with email verification and LinkedIn export.<!---->*/}</div>
        </div>
        {/* <!--qv q:id=w q:key=pd7A:p0_0--> */}
        <Image 
          height="1" 
          width="1" 
          src='' 
          alt="Background of Wope card" 
          className="lazy-image card-work-background lazy-image-loaded" 
        />
        {/* <!--/qv--> */}
        {/* <!--qv q:id=y q:key=pd7A:p0_1--> */}
        <Image 
          height="1" 
          width="1" 
          src='' 
          alt="Background of Wope card" 
          className="lazy-image card-work-background card-work-background-blur lazy-image-loaded" 
        />
        {/* <!--/qv--> */}
      </div>
      {/* <!--/qv--> */}

      {/* More card-work elements follow */}
    </div>
  )
}

export default CardsWorks
