import React,{ useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import bg_burger from '../img/banner-burger.png'
import bg_plov from '../img/banner-plov.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

function Carousel() {
  return (
    <div style={{marginTop:'150px'}} id='home'>
    
    
    <Swiper
        pagination={{
          type: 'progressbar',
        }}
        loop={true}
        autoplay={{delay:2000}}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='slide w-100' > <img src={bg_burger} /></SwiperSlide>
        <SwiperSlide className='slide w-100'> <img src={bg_plov}/></SwiperSlide>
        <SwiperSlide className='slide w-100'> <img src={bg_burger}/></SwiperSlide>
        <SwiperSlide className='slide w-100'> <img src={bg_plov}/></SwiperSlide>

        
      </Swiper>

    </div>
  )
}

export default Carousel