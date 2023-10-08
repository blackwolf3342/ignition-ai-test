'use client'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import './style.scss'
import { Children, useRef, useState } from 'react';
import { Autoplay, Controller } from 'swiper/modules';
import SwiperCore from 'swiper'
type Props = {
  children: React.ReactNode
}

export default function SliderBlock({ children }: Props) {
  SwiperCore.use([Autoplay])

  const swiperRef = useRef<SwiperCore>();
  return (
    <div className="slider-block">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        >
        { children && Children.map(children, (child) => {
          return (
            <SwiperSlide>
              {child}
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="slider-block__btns">
        <button  className='slider-block__prev' onClick={() => swiperRef.current?.slidePrev()}><svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.210665 9.17941L8.36691 1.02316C8.45194 0.938129 8.56726 0.890364 8.6875 0.890364C8.80774 0.890364 8.92306 0.938129 9.00809 1.02316C9.09311 1.10818 9.14088 1.2235 9.14088 1.34374C9.14088 1.46398 9.09311 1.5793 9.00809 1.66433L1.62555 9.04687L20.4688 9.04687C20.5889 9.04687 20.7042 9.09461 20.7892 9.17958C20.8741 9.26456 20.9219 9.37982 20.9219 9.49999C20.9219 9.62017 20.8741 9.73542 20.7892 9.8204C20.7042 9.90538 20.5889 9.95312 20.4688 9.95312L1.62555 9.95312L9.00809 17.3357C9.09311 17.4207 9.14088 17.536 9.14088 17.6562C9.14088 17.7765 9.09311 17.8918 9.00809 17.9768C8.92306 18.0619 8.80774 18.1096 8.6875 18.1096C8.56726 18.1096 8.45194 18.0619 8.36691 17.9768L0.210665 9.82058C0.168533 9.77849 0.135111 9.72852 0.112309 9.67351C0.0895061 9.6185 0.0777683 9.55954 0.0777683 9.49999C0.0777683 9.44044 0.0895061 9.38148 0.112309 9.32647C0.135111 9.27146 0.168533 9.22149 0.210665 9.17941Z" fill="#434343"/>
          </svg>
          </button>
          <button  className='slider-block__next' onClick={() => swiperRef.current?.slideNext()}>
          <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7893 9.82059L12.6331 17.9768C12.5481 18.0619 12.4327 18.1096 12.3125 18.1096C12.1923 18.1096 12.0769 18.0619 11.9919 17.9768C11.9069 17.8918 11.8591 17.7765 11.8591 17.6563C11.8591 17.536 11.9069 17.4207 11.9919 17.3357L19.3745 9.95313H0.53125C0.411074 9.95313 0.29582 9.90539 0.210842 9.82042C0.125865 9.73544 0.078125 9.62018 0.078125 9.50001C0.078125 9.37983 0.125865 9.26458 0.210842 9.1796C0.29582 9.09462 0.411074 9.04688 0.53125 9.04688H19.3745L11.9919 1.66434C11.9069 1.57932 11.8591 1.464 11.8591 1.34376C11.8591 1.22351 11.9069 1.1082 11.9919 1.02317C12.0769 0.938147 12.1923 0.890381 12.3125 0.890381C12.4327 0.890381 12.5481 0.938147 12.6331 1.02317L20.7893 9.17942C20.8315 9.22151 20.8649 9.27148 20.8877 9.32649C20.9105 9.3815 20.9222 9.44046 20.9222 9.50001C20.9222 9.55956 20.9105 9.61852 20.8877 9.67353C20.8649 9.72854 20.8315 9.77851 20.7893 9.82059Z" fill="#434343"/>
          </svg>

          </button>
      </div>
    </div>
  )
}