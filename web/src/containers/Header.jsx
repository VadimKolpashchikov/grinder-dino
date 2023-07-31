import React, { useState } from "react";
import { openFunctional, openOrder } from "../store/modalsReducer.js";
import { useDispatch, useSelector } from "react-redux";
import HeaderTop from "./HeaderTop.jsx";
import HeaderSlider from "./HeaderSlider.jsx";
import HeaderSliderWithPresent from "./HeaderSliderWithPresent.jsx";
function Header() {
  const dispatch = useDispatch();
  const product_482820 = useSelector((state) => state.dops.product_482820);
  const month = useSelector((state) => state.php.month);
  const test = useSelector((state) => state.php.test);
  const [headerList, setHeaderList] = useState(
    test
      ? [
          {
            id: 1,
            img: "build/images/header/header-hero-1.png",
            webp: "build/images/header/header-hero-1.webp",
            name: "LITE",
            active: false,
          },
          {
            id: 2,
            img: "build/images/header/header-hero-2.png",
            webp: "build/images/header/header-hero-2.webp",
            name: "STANDART",
            active: false,
          },
          {
            id: 3,
            img: "build/images/header/header-hero-3.png",
            webp: "build/images/header/header-hero-3.webp",
            name: "PREMIUM",
            active: false,
          },
        ]
      : [
          {
            id: 1,
            img: "build/images/header/header-hero-1-with-present_mobil.png",
            webp: "build/images/header/header-hero-1-with-present_mobil.webp",
            imgDesk: "build/images/header/header-hero-1-with-present.png",
            webpDesk: "build/images/header/header-hero-1-with-present.webp",
            name: "LITE",
            active: false,
          },
          {
            id: 2,
            img: "build/images/header/header-hero-2-with-present_mobil.png",
            webp: "build/images/header/header-hero-2-with-present_mobil.webp",
            imgDesk: "build/images/header/header-hero-2-with-present.png",
            webpDesk: "build/images/header/header-hero-2-with-present.webp",
            name: "STANDART",
            active: false,
          },
          {
            id: 3,
            img: "build/images/header/header-hero-3-with-present_mobil.png",
            webp: "build/images/header/header-hero-3-with-present_mobil.webp",
            imgDesk: "build/images/header/header-hero-3-with-present.png",
            webpDesk: "build/images/header/header-hero-3-with-present.webp",
            name: "PREMIUM",
            active: false,
          },
        ]
  );

  const [links, setLinks] = useState([
    { name: "Преимущества", to: "potential", duration: 1000, offset: 0 },
    { name: "Отзывы", to: "customers", duration: 1000, offset: 0 },
    { name: "Доставка и оплата", to: "rassrochka", duration: 1000, offset: 0 },
    { name: "О производителе", to: "quality", duration: 1000, offset: 0 },
  ]);

  return (
    <header className="header">
      <HeaderTop
        classItem={"header__top"}
        links={links}
        phone={"8 800 250 59 32"}
        phoneLink={88002505932}
      />
      <div className="header__hero header-hero">
        <div className="content-container">
          <div className="header-hero__box">
            <div className="header-hero__block-heading">
              <div className="header-hero__info">
                <span>Новинка 2023</span>
                <p>Один станок — максимум возможностей!</p>
              </div>
              <h1 className="header-hero__heading">Ленточный гриндер DINO</h1>
              <p className="header-hero__subtitle">
                <span onClick={() => dispatch(openFunctional(true))}>
                  11 задач
                </span>{" "}
                с уникальным ведущим валом
              </p>
            </div>

            {test ? (
              <HeaderSlider
                headerList={headerList}
                setHeaderList={setHeaderList}
              />
            ) : (
              <HeaderSliderWithPresent
                headerList={headerList}
                setHeaderList={setHeaderList}
              />
            )}

            <div className="header-hero__block-content">
              <ul className="header-hero__content-list">
                <li className="header-hero__content-item item-content">
                  <div className="item-content__img">
                    <img src="build/images/header/hero-icon-1.svg" alt="" />
                  </div>
                  <div className="item-content__content">
                    <h3 className="item-content__heading">
                      Свободная модернизация
                    </h3>
                    <p className="item-content__desc">
                      Ведущий ролик с резьбой для любых модулей и насадок
                    </p>
                  </div>
                </li>
                <li className="header-hero__content-item item-content">
                  <div className="item-content__img">
                    <img src="build/images/header/hero-icon-2.svg" alt="" />
                  </div>
                  <div className="item-content__content">
                    <h3 className="item-content__heading">
                      Неограниченная мощность
                    </h3>
                    <p className="item-content__desc">
                      Универсальное крепление под болгарки на 115 и 125 мм
                    </p>
                  </div>
                </li>
                <li className="header-hero__content-item item-content">
                  <div className="item-content__img">
                    <img src="build/images/header/hero-icon-3.svg" alt="" />
                  </div>
                  <div className="item-content__content">
                    <h3 className="item-content__heading">Высокая точность</h3>
                    <p className="item-content__desc">
                      Гриндер оснащён линейкой и транспортиром
                    </p>
                  </div>
                </li>
                <li className="header-hero__content-item item-content">
                  <div className="item-content__img">
                    <img src="build/images/header/hero-icon-4.svg" alt="" />
                  </div>
                  <div className="item-content__content">
                    <h3 className="item-content__heading">
                      Подвижная конструкция
                    </h3>
                    <p className="item-content__desc">
                      До 6 положений опорного столика и станины{" "}
                      <b>+ выведение спусков</b>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="header-hero__block-order">
              <div className="header-hero__order">
                <button
                  onClick={() => dispatch(openOrder(true))}
                  className="header-hero__btn-order btn btn-anim"
                >
                  Заказать
                </button>
                <span className="header-hero__border"></span>
                <span className="header-hero__text">
                  <span className="black">
                    до конца {month} с{" "}
                    <span className="red">выгодой&nbsp;25%</span>
                  </span>
                  Закажите модель LITE всего{" "}
                  <b>за&nbsp;{product_482820.priceF}&nbsp;руб.</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
