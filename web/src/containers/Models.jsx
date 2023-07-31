import React, { useState, useEffect } from "react";
import Image from "../components/Image.jsx";
import { Swiper, Pagination } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import { addMain } from "../store/dopsReducer.js";
import { openOrder } from "../store/modalsReducer.js";
function Models() {
  const dispatch = useDispatch();
  const mainDops = useSelector((state) => state.dops.mainProductsState);
  const product_482820 = useSelector((state) => state.dops.product_482820);
  const product_482821 = useSelector((state) => state.dops.product_482821);
  const product_482822 = useSelector((state) => state.dops.product_482822);
  const [modelsList, setModelsList] = useState([
    {
      id: 482820,
      title: "LITE",
      list: [
        "<b>Габариты (ВхШхГ):</b> 350х226х1703&nbsp;мм",
        "<b>Кол-во регулировок:</b> 2",
        "<b>Кол-во роликов:</b> 2",
        "<b>Длина ленты:</b> 610&nbsp;мм",
        "<b>Вес:</b> 14&nbsp;кг",
      ],
      price: product_482820.priceF,
      oldPrice: product_482820.oldPriceF,
    },
    {
      id: 482821,
      title: "STANDART",
      list: [
        "<b>Габариты (ВхШхГ):</b> 355х285х435&nbsp;мм",
        "<b>Кол-во регулировок:</b> 4",
        "<b>Кол-во роликов:</b> 4",
        "<b>Длина ленты:</b> 915&nbsp;мм",
        "<b>Вес:</b> 17,5&nbsp;кг",
      ],
      price: product_482821.priceF,
      oldPrice: product_482821.oldPriceF,
    },
    {
      id: 482822,
      title: "PREMIUM",
      list: [
        "<b>Габариты (ВхШхГ):</b> 370х280х580&nbsp;мм",
        "<b>Кол-во регулировок:</b> 6",
        "<b>Кол-во роликов:</b> 4",
        "<b>Длина ленты:</b> 1200&nbsp;мм",
        "<b>Вес:</b> 20,8&nbsp;кг",
      ],
      price: product_482822.priceF,
      oldPrice: product_482822.oldPriceF,
    },
  ]);
  const [myModelsSwiper, setMyModelsSwiper] = useState(false);

  function checkOrder(id) {
    for (let i = 0; i < mainDops.length; i++) {
      mainDops[i].selected = false;
      if (mainDops[i].id == id) {
        mainDops[i].selected = true;
      }
    }
    dispatch(addMain(mainDops));
    dispatch(openOrder(true));
  }

  useEffect(() => {
    setMyModelsSwiper(
      new Swiper(".models__swiper", {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: false,
        loop: false,
        pagination: {
          clickable: true,
          el: ".models__pagination",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        modules: [Pagination],
      })
    );
  }, [false]);

  return (
    <section id="models" className="models">
      <div className="content-container">
        <div className="title-box">
          <h2 className="title">
            Закажите гриндер DINO
            <br /> напрямую от производителя
          </h2>
        </div>
        <div className="models__swiper">
          <div className="row swiper-wrapper">
            {modelsList.map((model, idx) => (
              <div className="models__item swiper-slide" key={model.title}>
                <div className="models__img-wrap">
                  <Image
                    srcImg={`build/images/models/model-${idx + 1}.png`}
                    srcSource={`build/images/models/model-${idx + 1}.webp`}
                    altImg={model.title}
                  />
                  <div className="models__title-box">
                    <p
                      className="models__title"
                      dangerouslySetInnerHTML={{ __html: model.title }}
                    ></p>
                  </div>
                </div>
                <div className="models__text-wrap">
                  <ul className="models__list">
                    {model.list.map((el, id) => (
                      <li
                        key={id}
                        className="models__list-item"
                        dangerouslySetInnerHTML={{ __html: el }}
                      ></li>
                    ))}
                  </ul>
                  <div className="models__price-wrap">
                    <p className="models__price">
                      <span>{model.price}</span> руб.
                    </p>
                    <p className="models__oldPrice">
                      <span>{model.oldPrice}</span> руб.
                    </p>
                  </div>
                  <button
                    onClick={() => checkOrder(model.id)}
                    className="btn btn-anim"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="models__pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Models;
