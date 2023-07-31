import React, { useState } from "react";
import Image from "../components/Image.jsx";
import { useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import Fancybox from "../components/fancy/Fancybox.jsx";
import ReactImageZoom from "react-image-zoom";
function Reviews() {
  const windowWidth = useWindowWidth(767);
  const webp = useSelector((state) => state.php.webp);
  const [gallery, setGallery] = useState([
    {
      img: "build/images/reviews/reviews-item-1.png",
      webp: "build/images/reviews/reviews-item-1.webp",
      imgMob: "build/images/modal-functional/functional-item-5.jpg",
      webpMob: "build/images/modal-functional/functional-item-5.webp",
      bigImg: "build/images/modal-functional/functional-item-5-big.png",
      bigWebp: "build/images/modal-functional/functional-item-5-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-2.png",
      webp: "build/images/reviews/reviews-item-2.webp",
      imgMob: "build/images/modal-functional/functional-item-3.jpg",
      webpMob: "build/images/modal-functional/functional-item-3.webp",
      bigImg: "build/images/modal-functional/functional-item-3-big.png",
      bigWebp: "build/images/modal-functional/functional-item-3-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-3.png",
      webp: "build/images/reviews/reviews-item-3.webp",
      imgMob: "build/images/modal-functional/functional-item-2-6.jpg",
      webpMob: "build/images/modal-functional/functional-item-2-6.webp",
      bigImg: "build/images/modal-functional/functional-item-2-6-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-6-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-4.png",
      webp: "build/images/reviews/reviews-item-4.webp",
      imgMob: "build/images/modal-functional/functional-item-2-5.jpg",
      webpMob: "build/images/modal-functional/functional-item-2-5.webp",
      bigImg: "build/images/modal-functional/functional-item-2-5-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-5-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-5.png",
      webp: "build/images/reviews/reviews-item-5.webp",
      imgMob: "build/images/modal-functional/functional-item-2.jpg",
      webpMob: "build/images/modal-functional/functional-item-2.webp",
      bigImg: "build/images/modal-functional/functional-item-2-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-6.png",
      webp: "build/images/reviews/reviews-item-6.webp",
      imgMob: "build/images/modal-functional/functional-item-2-1.jpg",
      webpMob: "build/images/modal-functional/functional-item-2-1.webp",
      bigImg: "build/images/modal-functional/functional-item-2-1-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-1-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-7.png",
      webp: "build/images/reviews/reviews-item-7.webp",
      imgMob: "build/images/modal-functional/functional-item-2-2.jpg",
      webpMob: "build/images/modal-functional/functional-item-2-2.webp",
      bigImg: "build/images/modal-functional/functional-item-2-2-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-2-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-8.png",
      webp: "build/images/reviews/reviews-item-8.webp",
      imgMob: "build/images/modal-functional/functional-item-4.jpg",
      webpMob: "build/images/modal-functional/functional-item-4.webp",
      bigImg: "build/images/modal-functional/functional-item-4-big.png",
      bigWebp: "build/images/modal-functional/functional-item-4-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-9.png",
      webp: "build/images/reviews/reviews-item-9.webp",
      imgMob: "build/images/modal-functional/functional-item-2-3.jpg",
      webpMob: "build/images/modal-functional/functional-item-2-3.webp",
      bigImg: "build/images/modal-functional/functional-item-2-3-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-3-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-10.png",
      webp: "build/images/reviews/reviews-item-10.webp",
      imgMob: "build/images/modal-functional/functional-item-2-4.jpg",
      webpMob: "build/images/modal-functional/functional-item-2-4.webp",
      bigImg: "build/images/modal-functional/functional-item-2-4-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-4-big.webp",
      alt: "#",
    },
    {
      img: "build/images/reviews/reviews-item-1.png",
      webp: "build/images/reviews/reviews-item-11.webp",
      imgMob: "build/images/modal-functional/functional-item-1.jpg",
      webpMob: "build/images/modal-functional/functional-item-1.webp",
      bigImg: "build/images/modal-functional/functional-item-1-big.png",
      bigWebp: "build/images/modal-functional/functional-item-1-big.webp",
      alt: "#",
    },
  ]);
  function scrollInto() {
    document.getElementById("models").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section id="reviews" className="reviews-test">
      <div className="content-container">
        <div className="reviews__wrapper">
          <div className="title-box">
            <h3 className="title">
              Обзор
              <br /> гриндеров DINO{" "}
              <span className="background">
                <span className="name">LITE</span>
                <span className="border">/</span>
                <span className="name">STANDART</span>
                <span className="border">/</span>
                <span className="name premium">PREMIUM</span>
              </span>
            </h3>
          </div>
          <div className="reviews__box">
            <div className="reviews__block-video">
              <a
                href="https://youtu.be/o42QdUDxjf4"
                data-fancybox="video-reviews"
                className="reviews__video-img"
              >
                <Image
                  mobil={true}
                  media={575}
                  srcImgMob={`build/images/reviews/video-poster.jpg`}
                  srcSourceMob={`build/images/reviews/video-poster.webp`}
                  srcImg={`build/images/reviews/video-poster-mob.jpg`}
                  srcSource={`build/images/reviews/video-poster-mob.webp`}
                  altImg={"#"}
                />
                <div className="reviews__play">
                  <img src="build/images/reviews/play-video.svg" alt="" />
                </div>
              </a>
            </div>
          </div>

          <div className="reviews__gallery gallery-reviews">
            <h3 className="gallery-reviews__title">
              Гриндер DINO позволяет на высоком уровне проводить следующие
              работы:
            </h3>
            <div className="gallery-reviews__row">
              {windowWidth ? (
                <div className="gallery-reviews__slider-wrapper">
                  <Fancybox
                    options={{
                      Carousel: {
                        infinite: true,
                      },
                    }}
                  >
                    <Swiper
                      modules={[Navigation, Pagination]}
                      loop={true}
                      spaceBetween={30}
                      autoHeight={true}
                      pagination={{
                        clickable: true,
                        el: ".gallery-reviews__two-pagination",
                      }}
                      navigation={{
                        prevEl: ".gallery-reviews__two-prev",
                        nextEl: ".gallery-reviews__two-next",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        576: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {gallery.map((item, i) => (
                        <SwiperSlide key={i}>
                          <div className="gallery-reviews__slide">
                            <div
                              data-fancybox="gallery-reviews"
                              data-src={
                                webp == "webp" ? item.bigWebp : item.bigImg
                              }
                              className="gallery-reviews__item-img"
                            >
                              <Image
                                srcImg={item.imgMob}
                                srcSource={item.webpMob}
                                altImg={"#"}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Fancybox>
                  <div className="gallery-reviews__controls">
                    <button className="gallery-reviews__two-prev">
                      <span>
                        <img src="build/images/global/arrow-left.svg" alt="" />
                      </span>
                    </button>
                    <div className="gallery-reviews__two-pagination"></div>
                    <button className="gallery-reviews__two-next">
                      <span>
                        <img src="build/images/global/arrow-right.svg" alt="" />
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: true,
                    },
                  }}
                >
                  <div className="gallery-reviews__box">
                    {gallery.map((item, i) => (
                      <div
                        key={i}
                        data-fancybox="gallery-reviews"
                        data-src={webp == "webp" ? item.bigWebp : item.bigImg}
                        className={`gallery-reviews__img-${i}`}
                      >
                        <Image
                          srcImg={item.img}
                          srcSource={item.webp}
                          altImg={item.alt}
                        />
                      </div>
                    ))}
                  </div>
                </Fancybox>
              )}

              <div className="gallery-reviews__content">
                <ul className="gallery-reviews__list">
                  <li className="gallery-reviews__list-title">
                    В базовой комплектации:
                  </li>
                  <li className="gallery-reviews__item">Заточка</li>
                  <li className="gallery-reviews__item">Шлифовка</li>
                  <li className="gallery-reviews__item">Торцевание</li>
                  <li className="gallery-reviews__item">Зачистка от краски</li>
                  <li className="gallery-reviews__item">
                    Зачистка от ржавчины
                  </li>
                </ul>
                <ul className="gallery-reviews__list">
                  <li className="gallery-reviews__list-title">
                    Расширенный функционал:
                  </li>
                  <li className="gallery-reviews__item">Нарезка</li>
                  <li className="gallery-reviews__item">Полировка</li>
                  <li className="gallery-reviews__item">Сверление</li>
                  <li className="gallery-reviews__item">Грубая зачистка</li>
                  <li className="gallery-reviews__item">Заточка сверла</li>
                  <li className="gallery-reviews__item">Сатинирование</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews__block-more">
          <p className="reviews__desc">Узнайте подробнее о каждой модели</p>
          <div className="reviews__icon" onClick={scrollInto}>
            <img src="build/images/reviews/icon-reviews.svg" alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
