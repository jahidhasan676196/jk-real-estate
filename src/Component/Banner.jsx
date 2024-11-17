import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from '../assets/slider/slider_1.jpg'
import slider2 from '../assets/slider/slider_2.jpg'
import slider3 from '../assets/slider/slider_3.jpg'
import slider4 from '../assets/slider/slider_4.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='min-w-full  mt-20 h-1/2'>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[400px] rounded-md"
      >
        <SwiperSlide><img className='w-full h-full bg-center bg-cover'  src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full bg-center bg-cover'  src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full bg-center bg-cover'  src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full bg-center bg-cover'  src={slider4} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;