import React, { useState } from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import Image from "./Image.jsx";
import Fancybox from "./fancy/Fancybox.jsx";
import ReactImageZoom from "react-image-zoom";

function ModalFunctional() {
  const webp = useSelector((state) => state.php.webp);
  const windowWidth = useWindowWidth(767);
  const activeModal = useSelector(
    (state) => state.modals.ModalFunctionalActive
  );
  const [functionalItem, setFunctionalItem] = useState([
    {
      id: 1,
      img: "build/images/modal-functional/functional-item-5.jpg",
      webp: "build/images/modal-functional/functional-item-5.webp",
      bigImg: "build/images/modal-functional/functional-item-5-big.png",
      bigWebp: "build/images/modal-functional/functional-item-5-big.webp",
      title: "Заточка",
    },
    {
      id: 2,
      img: "build/images/modal-functional/functional-item-4.jpg",
      webp: "build/images/modal-functional/functional-item-4.webp",
      bigImg: "build/images/modal-functional/functional-item-4-big.png",
      bigWebp: "build/images/modal-functional/functional-item-4-big.webp",
      title: "Шлифовка",
    },
    {
      id: 3,
      img: "build/images/modal-functional/functional-item-3.jpg",
      webp: "build/images/modal-functional/functional-item-3.webp",
      bigImg: "build/images/modal-functional/functional-item-3-big.png",
      bigWebp: "build/images/modal-functional/functional-item-3-big.webp",
      title: "Торцевание",
    },
    {
      id: 4,
      img: "build/images/modal-functional/functional-item-2.jpg",
      webp: "build/images/modal-functional/functional-item-2.webp",
      bigImg: "build/images/modal-functional/functional-item-2-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-big.webp",
      title: "Зачистка от краски",
    },
    {
      id: 5,
      img: "build/images/modal-functional/functional-item-1.jpg",
      webp: "build/images/modal-functional/functional-item-1.webp",
      bigImg: "build/images/modal-functional/functional-item-1-big.png",
      bigWebp: "build/images/modal-functional/functional-item-1-big.webp",
      title: "Зачистка от ржавчины",
    },
  ]);

  const [functionalItemTwo, setFunctionalItemTwo] = useState([
    {
      id: 1,
      img: "build/images/modal-functional/functional-item-2-1.jpg",
      webp: "build/images/modal-functional/functional-item-2-1.webp",
      bigImg: "build/images/modal-functional/functional-item-2-1-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-1-big.webp",
      title: "Нарезка",
      desc: "С отрезным диском, который крепится через резьбу на ролике",
    },
    {
      id: 2,
      img: "build/images/modal-functional/functional-item-2-2.jpg",
      webp: "build/images/modal-functional/functional-item-2-2.webp",
      bigImg: "build/images/modal-functional/functional-item-2-2-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-2-big.webp",
      title: "Полировка",
      desc: "С полировальным колесом, которое крепится через резьбу на ролике",
    },
    {
      id: 3,
      img: "build/images/modal-functional/functional-item-2-3.jpg",
      webp: "build/images/modal-functional/functional-item-2-3.webp",
      bigImg: "build/images/modal-functional/functional-item-2-3-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-3-big.webp",
      title: "Сверление",
      desc: "С установленным патроном для дрели",
    },
    {
      id: 4,
      img: "build/images/modal-functional/functional-item-2-4.jpg",
      webp: "build/images/modal-functional/functional-item-2-4.webp",
      bigImg: "build/images/modal-functional/functional-item-2-4-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-4-big.webp",
      title: "Грубая зачистка",
      desc: "С металлическими щётками или наждачным колесом",
    },
    {
      id: 5,
      img: "build/images/modal-functional/functional-item-2-5.jpg",
      webp: "build/images/modal-functional/functional-item-2-5.webp",
      bigImg: "build/images/modal-functional/functional-item-2-5-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-5-big.webp",
      title: "Заточка сверла",
      desc: "Со специальной насадкой для сверловой заточки",
    },
    {
      id: 6,
      img: "build/images/modal-functional/functional-item-2-6.jpg",
      webp: "build/images/modal-functional/functional-item-2-6.webp",
      bigImg: "build/images/modal-functional/functional-item-2-6-big.png",
      bigWebp: "build/images/modal-functional/functional-item-2-6-big.webp",
      title: "Сатинирование",
      desc: "С помощью шлифовального колеса",
    },
  ]);
  return (
    <Modal modalClass={"modal-functional"} active={activeModal}>
      <h3 className="modal-functional__heading">Функционал Гриндера</h3>
      <div className="modal-functional__wrapper">
        <h3 className="modal-functional__wrapper-heading">
          Базовый функционал
        </h3>
        {windowWidth ? (
          <div className="modal-functional__slider-wrapper">
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
                  el: ".modal-functional__two-pagination",
                }}
                navigation={{
                  prevEl: ".modal-functional__two-prev",
                  nextEl: ".modal-functional__two-next",
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
                {functionalItem.map((item, i) => (
                  <SwiperSlide key={item.id}>
                    <div className="modal-functional__item">
                      <div
                        data-fancybox="gallery-functional"
                        data-src={webp == "webp" ? item.bigWebp : item.bigImg}
                        className="modal-functional__item-img"
                      >
                        <Image
                          srcImg={item.img}
                          srcSource={item.webp}
                          altImg={"#"}
                        />
                      </div>
                      <h4 className="modal-functional__item-name">
                        <span>
                          {i + 1}/{functionalItem.length}{" "}
                        </span>
                        {item.title}
                      </h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Fancybox>
            <div className="modal-functional__controls">
              <button className="modal-functional__two-prev">
                <span>
                  <img src="build/images/global/arrow-left.svg" alt="" />
                </span>
              </button>
              <div className="modal-functional__two-pagination"></div>
              <button className="modal-functional__two-next">
                <span>
                  <img src="build/images/global/arrow-right.svg" alt="" />
                </span>
              </button>
            </div>
          </div>
        ) : (
          // <Fancybox
          //   options={{
          //     Carousel: {
          //       infinite: true,
          //     },
          //   }}
          // >
          <ul className="modal-functional__list">
            {functionalItem.map((item) => (
              <li className="modal-functional__item" key={item.id}>
                {/* width={400}
                  height={250}
                  zoomWidth={500}
                  img={webp == "webp" ? item.bigWebp : item.bigImg} */}

                <div
                  data-fancybox="gallery-functional"
                  data-src={webp == "webp" ? item.bigWebp : item.bigImg}
                  className="modal-functional__item-img"
                >
                  {/* <Image srcImg={item.img} srcSource={item.webp} altImg={"#"} /> */}
                  <ReactImageZoom
                    width={219}
                    height={219}
                    zoomWidth={707}
                    img={webp == "webp" ? item.bigWebp : item.bigImg}
                  />
                </div>

                <h4 className="modal-functional__item-name">{item.title}</h4>
              </li>
            ))}
          </ul>
          // </Fancybox>
        )}
      </div>

      <div className="modal-functional__wrapper margin">
        <h3 className="modal-functional__wrapper-heading">
          Расширенный функционал,{" "}
          <span>
            доступный при использовании адаптеров (не идут в комплекте)
          </span>
        </h3>
        {windowWidth ? (
          <div className="modal-functional__slider-wrapper">
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
                  el: ".modal-functional__pagination",
                }}
                navigation={{
                  prevEl: ".modal-functional__prev",
                  nextEl: ".modal-functional__next",
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
                {functionalItemTwo.map((item, i) => (
                  <SwiperSlide key={item.id}>
                    <div key={item.id} className="modal-functional__item">
                      <div
                        data-fancybox="gallery-functional-2"
                        data-src={webp == "webp" ? item.bigWebp : item.bigImg}
                        className="modal-functional__item-img"
                      >
                        <Image
                          srcImg={item.img}
                          srcSource={item.webp}
                          altImg={"#"}
                        />
                      </div>
                      <h4 className="modal-functional__item-name">
                        <span>
                          {i + 1}/{functionalItemTwo.length}{" "}
                        </span>
                        {item.title}
                      </h4>
                      <p className="modal-functional__item-desc">{item.desc}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Fancybox>
            <div className="modal-functional__controls">
              <button className="modal-functional__prev">
                <span>
                  <img src="build/images/global/arrow-left.svg" alt="" />
                </span>
              </button>
              <div className="modal-functional__pagination"></div>
              <button className="modal-functional__next">
                <span>
                  <img src="build/images/global/arrow-right.svg" alt="" />
                </span>
              </button>
            </div>
          </div>
        ) : (
          // <Fancybox
          //   options={{
          //     Carousel: {
          //       infinite: true,
          //     },
          //   }}
          // >
          <ul className="modal-functional__list">
            {functionalItemTwo.map((item) => (
              <li key={item.id} className="modal-functional__item">
                <div
                  data-fancybox="gallery-functional-2"
                  data-src={webp == "webp" ? item.bigWebp : item.bigImg}
                  className="modal-functional__item-img"
                >
                  {/* <Image
                      srcImg={item.img}
                      srcSource={item.webp}
                      altImg={"#"}
                    /> */}
                  <ReactImageZoom
                    width={219}
                    height={219}
                    zoomWidth={707}
                    img={webp == "webp" ? item.bigWebp : item.bigImg}
                  />
                </div>
                <h4 className="modal-functional__item-name">{item.title}</h4>
                <p className="modal-functional__item-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
          // </Fancybox>
        )}
      </div>
    </Modal>
  );
}

export default ModalFunctional;
