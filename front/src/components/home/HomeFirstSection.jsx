import React from 'react'
import Hero1 from '../../assets/images/hero1.jpg'
import Hero2 from '../../assets/images/hero2.jpg'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeFirstSection = () => {
  return (
    <div>
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img  src={Hero1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Hero2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Hero1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Hero2} alt="" /></SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

export default HomeFirstSection
