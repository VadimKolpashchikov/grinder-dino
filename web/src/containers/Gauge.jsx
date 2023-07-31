import React, { useState, useEffect } from "react";
import Image from "../components/Image.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
function Gauge() {
  const [gaugeList, setGaugeList] = useState([
    {
      title: "LITE",
      list: [
        "<b>Боковой транспортир</b> обеспечивает регулировку столика",
        "<b>Гравировка в виде транспортира</b> на опорном столике позволяет выставить заготовку под определённым углом к ленте",
      ],
    },
    {
      title: "STANDART",
      list: [
        "<b>Боковой транспортир</b> обеспечивает регулировку столика",
        `<b>Транспортир и линейка:</b> 
        <ul>
            <li>устанавливаются в специальный паз, <b>не мешают обработке</b> заготовок;</li>
            <li>легко <b>перемещаются, снимаются</b> для любых замеров (например, транспортир — как угломер);</li>
            <li>помогут <b>быстро оценить изменение угла и размера</b> детали до и после обработки;</li>
            <li>позволяют <b>сдвигать заготовку по столику без изменения угла</b> обработки (точность — до 0,1 мм);</li>
            <li>заготовка упирается в вертикальную стенку транспортира, они сдвигаются по направляющей столика (возвратно-поступательные движения), что <b>обеспечивает максимальную точность обработки</b>;</li>
            <li>выполнены из медицинской нержавеющей стали: <b>срок эксплуатации практически не ограничен</b>.</li>
        </ul>
       `,
      ],
    },
    {
      title: "PREMIUM",
      list: [
        "<b>Боковой транспортир</b> обеспечивает регулировку столика",
        `<b>Транспортир и линейка:</b> 
        <ul>
            <li>устанавливаются в специальный паз, <b>не мешают обработке</b> заготовок;</li>
            <li>легко <b>перемещаются, снимаются</b> для любых замеров (например, транспортир — как угломер);</li>
            <li>помогут <b>быстро оценить изменение угла и размера</b> детали до и после обработки;</li>
            <li>позволяют <b>сдвигать заготовку по столику без изменения угла</b> обработки (точность — до 0,1 мм);</li>
            <li>заготовка упирается в вертикальную стенку транспортира, они сдвигаются по направляющей столика (возвратно-поступательные движения), что <b>обеспечивает максимальную точность обработки</b>;</li>
            <li>выполнены из медицинской нержавеющей стали: <b>срок эксплуатации практически не ограничен</b>.</li>
        </ul>
       `,
      ],
    },
  ]);

  const [mobilWidthActive, setMobilWidthActive] = useState(false);

  useEffect(() => {
    const mobilWidth = window.matchMedia("(max-width: 991px)");
    const getMobilWidth = () => {
      setMobilWidthActive(mobilWidth.matches);
    };
    getMobilWidth();
    mobilWidth.addListener(getMobilWidth);

    return () => {
      mobilWidth.removeListener(getMobilWidth);
    };
  }, []);

  return (
    <section id="gauge" className="gauge">
      <div className="content-container">
        <div className="title-box">
          <h2 className="title">
            Обрабатывайте{" "}
            <span className="text-primary">с&nbsp;высокой точностью</span>
          </h2>
          <p className="subtitle">
            Измерительные приборы прямо на корпусе гриндера
          </p>
        </div>
        <div className="row">
          {mobilWidthActive ? (
            <Swiper
              loop={false}
              slidesPerView={"auto"}
              slidesPerGroup={1}
              spaceBetween={0}
              centeredSlides={false}
            >
              {gaugeList.map((gauge, idx) => (
                <SwiperSlide key={idx} className={`slider-${idx + 1}`}>
                  <div className="gauge__item" key={gauge.title}>
                    <div className="gauge__img-wrap">
                      <Image
                        mobil={true}
                        media={576}
                        srcImgMob={`build/images/gauge/gauge-${idx + 1}.png`}
                        srcSourceMob={`build/images/gauge/gauge-${
                          idx + 1
                        }.webp`}
                        srcImg={`build/images/gauge/gauge-${idx + 1}_mobil.png`}
                        srcSource={`build/images/gauge/gauge-${
                          idx + 1
                        }_mobil.webp`}
                        altImg={gauge.title}
                      />
                      <div className="gauge__title-wrap">
                        <p
                          className="gauge__title"
                          dangerouslySetInnerHTML={{ __html: gauge.title }}
                        ></p>
                      </div>
                    </div>
                    <div className="gauge__text-wrap">
                      <ul className="gauge__list">
                        {gauge.list.map((el, id) => (
                          <li
                            key={id}
                            className="gauge__list-item"
                            dangerouslySetInnerHTML={{ __html: el }}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              modules={[Navigation, Pagination]}
              loop={true}
              slidesPerView={"auto"}
              slidesPerGroup={1}
              spaceBetween={0}
              loopPreventsSliding={false}
              centeredSlides={true}
              loopedSlides={1}
              navigation={{
                prevEl: ".gauge__slider-prev",
                nextEl: ".gauge__slider-next",
              }}
              pagination={{
                clickable: true,
                el: ".gauge__pagination",
              }}
            >
              {gaugeList.map((gauge, idx) => (
                <SwiperSlide key={idx} className={`slider-${idx + 1}`}>
                  <div className="gauge__item" key={gauge.title}>
                    <div className="gauge__img-wrap">
                      <Image
                        mobil={true}
                        media={576}
                        srcImgMob={`build/images/gauge/gauge-${idx + 1}.png`}
                        srcSourceMob={`build/images/gauge/gauge-${
                          idx + 1
                        }.webp`}
                        srcImg={`build/images/gauge/gauge-${idx + 1}_mobil.png`}
                        srcSource={`build/images/gauge/gauge-${
                          idx + 1
                        }_mobil.webp`}
                        altImg={gauge.title}
                      />
                      <div className="gauge__title-wrap">
                        <p
                          className="gauge__title"
                          dangerouslySetInnerHTML={{ __html: gauge.title }}
                        ></p>
                      </div>
                    </div>
                    <div className="gauge__text-wrap">
                      <ul className="gauge__list">
                        {gauge.list.map((el, id) => (
                          <li
                            key={id}
                            className="gauge__list-item"
                            dangerouslySetInnerHTML={{ __html: el }}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="gauge__slider-controls">
            <div className="gauge__slider-prev">
              <span>
                <img
                  src="build/images/global/arrow-left.svg"
                  alt="Предыдущий слайд"
                />
              </span>
            </div>
            <div className="gauge__pagination"></div>
            <div className="gauge__slider-next">
              <span>
                <img
                  src="build/images/global/arrow-right.svg"
                  alt="Следующий слайд"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gauge;
