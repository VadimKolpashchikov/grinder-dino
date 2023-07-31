import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import CustomersItem from "./CustomersItem.jsx";
import ModalReview from "../components/ModalReview.jsx";
import { useDispatch } from "react-redux";
import { openReview } from "../store/modalsReducer.js";
function Customers() {
  const dispatch = useDispatch();
  const [customersList, setCustomersList] = useState([
    {
      title: "Олег Сальков, г.&nbsp;Москва",
      prof: "Владелец точильной&nbsp;мастерской",
      text: `— Долго не понимал в чём прикол гриндера и чем он лучше лепесткового круга на болгарку особо. Теперь попробовал сам и выяснил . шлифовка поверхности получается быстрее и ровнее. Для подгонки деталей сварки вообще оптимал, кто занимается сваркой нержавейки, если нужно сделать ровную плоскость из железяки… шлифовка древесины от лкм.`,
      textTwo: `— В общем норм даже если долго колбасить. Взял в мастерску пока доволен. Будем смотреть дальше`,
    },
    {
      title: "Даниил Калинин, г.&nbsp;Тверь",
      prof: "Токарь",
      text: `— такое дело. несмотя на конские обороты,решил точить токарные резцы, потому что не всякий круг их берет. Всё получилось. Торцевая выборка трубы под Т-образное соединение тоже пошла. Спасибо за товар.`,
    },
    {
      title: "Степан Сунцов, г.&nbsp;Калуга",
      prof: "Садовод",
      text: `— Мне все норм, оставлю даже на постоянное пользование, а то мой совсем помер 😎.`,
    },
    {
      title: "Стас Корчёмкин, пос&nbsp;Мироный",
      prof: "Столяр",
      text: `— Пару дней поработал, годнота. Вбивал в интернете по-всякому, чтобы найти аналоги или рейтинг глянуть — просто любопытно было иничего не нашел. Работаю сейчас в оснавном с пластиком и проблема, что при нагреве роликов работать становится невозможно.Это жнадо кажды раз ждать чтобы остыл. Здесь такой проблемы заметил. За свой кеш станок просто топ. Можно ли будет заказать на маркетплейсах с бесплатной доставкой? Еще порадовала что с гарантией все норм.`,
    },
  ]);
  const [sendedReview, setSendedReview] = useState(false);

  return (
    <section id="customers" className="customers">
      <div className="content-container">
        <div className="title-box">
          <h2 className="title">Отзывы первых обладателей гриндера DINO</h2>
        </div>
        <div className="row">
          <div className="customers__slider-block">
            <div className="customers__slider">
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={20}
                navigation={{
                  prevEl: ".customers__slider-prev",
                  nextEl: ".customers__slider-next",
                }}
                pagination={{
                  clickable: true,
                  el: ".customers__pagination",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                  },
                }}
              >
                {customersList.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <CustomersItem img={idx + 1} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="customers__slider-controls">
              <div className="customers__slider-prev">
                <span>
                  <img
                    src="build/images/global/arrow-left.svg"
                    alt="Предыдущий слайд"
                  />
                </span>
              </div>
              <div className="customers__slider-next">
                <span>
                  <img
                    src="build/images/global/arrow-right.svg"
                    alt="Следующий слайд"
                  />
                </span>
              </div>
            </div>
            <div className="customers__pagination"></div>
          </div>
          <div className="customers__btn-wrap">
            <button
              disabled={sendedReview}
              onClick={() => dispatch(openReview(true))}
              className="btn"
            >
              Оставить отзыв
            </button>
          </div>
        </div>
      </div>
      <ModalReview setSendedReview={setSendedReview} />
    </section>
  );
}

export default Customers;
