import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import { Transition } from "react-transition-group";
import { LazyLoadComponent } from "react-lazy-load-image-component";
function Gallery() {
  const windowWidth = useWindowWidth(575);
  const webp = useSelector(state => state.php.webp);
  const [galleryItem, setGalleryItem] = useState([
    {
      id: 1,
      name: "lite",
      active: true,
      gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
      id: 2,
      active: false,
      name: "standart",
      gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
      id: 3,
      active: false,
      name: "premium",
      gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  ]);

  function changeTab(index) {
    setGalleryItem(prev => {
      for (let i = 0; i < prev.length; i++) {
        prev[i].active = false;
      }
      prev[index].active = true;
      return JSON.parse(JSON.stringify(prev));
    });
  }

  return (
    <section className="gallery">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">Реальные фото гриндеров DINO</h3>
        </div>
        <ul className="gallery__list">
          {galleryItem.map((item, index) => (
            <li
              onClick={() => changeTab(index)}
              key={item.id}
              className={`gallery__name ${item.active ? "active" : ""}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <LazyLoadComponent>
          {galleryItem.map(item =>
            windowWidth ? (
              <Transition key={item.id} in={item.active} timeout={0}>
                {state => (
                  <div className={`gallery__wrapper ${state}`}>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      loop={true}
                      slidesPerView={1}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                        el: `.gallery-pagination-${item.name}`
                      }}
                      navigation={{
                        prevEl: `.gallery-prev-${item.name}`,
                        nextEl: `.gallery-next-${item.name}`
                      }}
                    >
                      {item.gallery.map((itemGallery, i) => (
                        <SwiperSlide key={i}>
                          <div
                            data-fancybox="gallery"
                            data-src={
                              webp == "webp"
                                ? `build/images/gallery/gallery_${
                                    item.name
                                  }-${i + 1}-big.webp`
                                : `build/images/gallery/gallery_${
                                    item.name
                                  }-${i + 1}-big.jpg`
                            }
                            className="gallery__img"
                          >
                            <picture>
                              <source
                                srcSet={`build/images/gallery/gallery_${
                                  item.name
                                }-${i + 1}-mob.webp`}
                                type="image/webp"
                              />
                              <img
                                src={`build/images/gallery/gallery_${
                                  item.name
                                }-${i + 1}-mob.jpg`}
                                alt="#"
                              />
                            </picture>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="gallery__controls">
                      <button
                        className={`gallery__prev gallery-prev-${item.name}`}
                      >
                        <span>
                          <img
                            src="build/images/global/arrow-left.svg"
                            alt=""
                          />
                        </span>
                      </button>
                      <div
                        className={`gallery__pagination gallery-pagination-${item.name}`}
                      ></div>
                      <button
                        className={`gallery__next gallery-next-${item.name}`}
                      >
                        <span>
                          <img
                            src="build/images/global/arrow-right.svg"
                            alt=""
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </Transition>
            ) : (
              <Transition key={item.id} in={item.active} timeout={0}>
                {state => (
                  <div className={`gallery__box ${state}`}>
                    {item.gallery.map((itemGallery, i) => (
                      <div
                        key={i}
                        data-fancybox={`gallery-${item.id}`}
                        data-src={
                          webp == "webp"
                            ? `build/images/gallery/gallery_${item.name}-${i +
                                1}-big.webp`
                            : `build/images/gallery/gallery_${item.name}-${i +
                                1}-big.jpg`
                        }
                        className={`gallery__item-${i + 1}`}
                      >
                        <picture>
                          <source
                            srcSet={`build/images/gallery/gallery_${
                              item.name
                            }-${i + 1}.webp`}
                            type="image/webp"
                          />
                          <img
                            src={`build/images/gallery/gallery_${
                              item.name
                            }-${i + 1}.jpg`}
                            alt="#"
                          />
                        </picture>
                      </div>
                    ))}
                  </div>
                )}
              </Transition>
            )
          )}
        </LazyLoadComponent>
      </div>
    </section>
  );
}

export default Gallery;
