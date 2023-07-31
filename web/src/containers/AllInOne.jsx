import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "../components/Image.jsx";
import AllInOneItem from "./AllInOneItem.jsx";
function AllInOne() {
  const [allInOneList, setAllInOneList] = useState([
    {
      title: "Гайки с прокладкой",
      text: "Надёжно фиксируют резьбу, не давая ей раскрутиться<br/> во время работы.",
      list: [
        "<b>Вид —</b> DIN&nbsp;982",
        "<b>Материал прокладки —</b> нейлон",
        "<b>Оцинковка —</b> да",
      ],
    },
    {
      title: "Ведущий ролик<br/> бочкообразный с резьбой",
      text: "Ролик выравнивает ленту и не даёт ей слететь во время работы станка. Устанавливайте насадки, адаптеры и шлифовальные круги на ведущий вал и используйте все возможности гриндера.",
      list: [
        "<b>Материал —</b> Ст45",
        "<b>Диаметр —</b> 43&nbsp;мм",
        "<b>Совместимость —</b> под ленту до&nbsp;50&nbsp;мм",
      ],
    },
    {
      title: "Пружины для натяжения ленты",
      text: "Выстраивают оптимальное натяжение для правильной,<br/> а главное — быстрой установки абразивной ленты, в несколько<br/> раз увеличивают её ресурс.",
      list: ["<b>Материал —</b> пружинная проволока"],
    },
    {
      title:
        "Валы с распорными<br/> втулками, усиленными осями и прижимной шайбой",
      text: "Токарные элементы удерживают подшипник в правильном<br/> положении и предотвращают перегрев роликов.",
      list: [
        "<b>Материал —</b> Ст45",
        "<b>Материал втулок –</b> AISI&nbsp;304",
        "<b>Подшипники —</b> закрытого типа (Япония)",
      ],
    },
    {
      title: "Соосная рамная конструкция",
      text: "Компенсирует излишнее давление на ролик, обеспечивая<br/> максимально ровное вращение без лишнего биения, отсутствие люфтов.",
      list: [
        "<b>Толщина стали —</b> до 6&nbsp;мм",
        "<b>Покрытие —</b> матовая порошковая краска 389&nbsp;UP",
        "<b>Метод гравировки —</b> лазерный маркер",
      ],
    },
    {
      title: "Узел натяжения",
      text: "Корректирует положение прижимного вала и центрует ленту<br/> на роликах, предотвращая случайное соскальзывание. ",
      list: ["<b>Материал —</b> Ст3 и Ст45"],
    },
    {
      title: "Поворотная станина",
      text: "Прочная станина не деформируется и не повредится ни при<br/> каких условиях. Монолитная конструкция устанавливается<br/> на любую поверхность с помощью стандартных крепёжных<br/> отверстий. У модели PREMIUM станина вращается на 360°<br/> вокруг основания, обеспечивая наиболее комфортные условия<br/> работы.",
      list: [
        "<b>Материал —</b> Ст3",
        "<b>Толщина —</b> 6&nbsp;мм",
        "<b>Кол-во крепёжных отверстий —</b> 4",
      ],
    },
  ]);
  return (
    <section id="all-in-one" className="all-in-one">
      <div className="content-container">
        <div className="title-box">
          <h2 className="title">
            <span className="text-primary">Всё, что нужно</span>
            <br /> для удобной работы, —&nbsp;в одном станке
          </h2>
          <p className="subtitle">7 причин, почему покупатели выбирают DINO</p>
        </div>
        <div className="row">
          <div className="all-in-one__slider-block">
            <div className="all-in-one__slider">
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                  prevEl: ".all-in-one__slider-prev",
                  nextEl: ".all-in-one__slider-next",
                }}
                pagination={{
                  clickable: true,
                  el: ".all-in-one__pagination",
                }}
              >
                {allInOneList.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <AllInOneItem item={item} number={idx + 1} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="all-in-one__slider-controls">
              <div className="all-in-one__slider-prev">
                <span>
                  <img
                    src="build/images/global/arrow-left.svg"
                    alt="Предыдущий слайд"
                  />
                </span>
              </div>
              <div className="all-in-one__pagination"></div>
              <div className="all-in-one__slider-next">
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
      </div>
    </section>
  );
}

export default AllInOne;
