import React, { useState } from "react";
import Image from "../components/Image.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
function HeaderSlider({ headerList, setHeaderList }) {
  const [activeSlide, setActiveSlide] = useState(0);
  function ChangeThumbs(index) {
    setHeaderList((prev) => {
      for (let i = 0; i < prev.length; i++) {
        prev[i].active = false;
      }
      prev[index].active = true;
      return JSON.parse(JSON.stringify(prev));
    });
    setActiveSlide(index);
  }
  return (
    <div className="header-hero__block-image">
      <a data-fancybox="video-header" href="https://youtu.be/HRc_DCjKkg8" className="header-hero__video-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
        >
          <circle cx="39" cy="39" r="39" />
          <circle cx="39.2846" cy="39.2847" r="30.1752" />
          <circle cx="39.2854" cy="39.2847" r="20.4964" />
          <path
            d="M48.6782 37.8055C49.8169 38.4629 49.8169 40.1065 48.6782 40.7639L35.868 48.1599C34.7293 48.8173 33.3059 47.9955 33.3059 46.6807L33.3059 31.8887C33.3059 30.5739 34.7293 29.7521 35.868 30.4095L48.6782 37.8055Z"
            fill="white"
          />
        </svg>
        <p>Смотреть видео</p>
        <img src="build/images/header/arrow.svg" alt="Смотреть видео" />
      </a>
      <div className="header-hero__slider">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          initialSlide={2}
          navigation={{
            prevEl: ".header-hero__slider-prev",
            nextEl: ".header-hero__slider-next",
          }}
          pagination={{
            clickable: true,
            el: ".header-hero__pagination",
          }}
          onSwiper={(swiper) => ChangeThumbs(swiper.realIndex)}
          onSlideChange={(swiper) => ChangeThumbs(swiper.realIndex)}
        >
          {headerList.map((item) => (
            <SwiperSlide key={item.id}>
              <Image srcImg={item.img} srcSource={item.webp} altImg={"#"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="header-hero__thumbs">
        <p className="header-hero__thumbs-item active">
          {headerList[activeSlide].name}
        </p>
        <div className="header-hero__slider-control">
          <div className="header-hero__slider-prev">
            <img src="build/images/header/arrow-slide.svg" alt="" />
          </div>
          <div className="header-hero__pagination"></div>
          <div className="header-hero__slider-next">
            <img src="build/images/header/arrow-slide.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlider;
