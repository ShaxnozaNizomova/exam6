import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../hero/Hero.css'
import back1 from '../../assets/images/background.jpg'
import back2 from '../../assets/images/backround2.jpeg'
import back3 from '../../assets/images/background3.jpeg'
import back4 from '../../assets/images/background4.jpeg'
function Hero() {
  return (
    <div className='hero'>
      <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={back1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={back2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={back3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={back4} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
    </div>
  )
}

export default Hero
