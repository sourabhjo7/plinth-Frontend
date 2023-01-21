// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
import 'swiper/modules/pagination/pagination.min.css'; // Pagination module

import "./styles.css";

import { Autoplay,Navigation, A11y } from 'swiper';

import image1 from "./image-1.jpg";
import image2 from "./image-1.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpg";
import image5 from "./image-5.jpg";

const slides = [image1, image2, image3, image4, image5];

const isMobile = window.screen.width < 600;


export const Carousel = () => {
  return (
    <Swiper className="swipe" modules={[Autoplay,Navigation, A11y]}
    spaceBetween={isMobile?1: 25}
    navigation
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')} slidesPerView={isMobile?2:3} loop>
      {slides.map((slide) => (
        <SwiperSlide>
          <img className="swipeimg" src={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

{/* <Swiper className="swipe" modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={80}
    navigation
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')} slidesPerView={3} loop>
      {slides.map((slide) => (
        <SwiperSlide>
          <img src={slide} />
        </SwiperSlide>
      ))}
    </Swiper> */}
