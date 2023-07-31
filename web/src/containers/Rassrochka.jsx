import React, { useState } from "react";
import RassrochkaItem from "./RassrochkaItem.jsx";
import Image from "../components/Image.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addRassrochka } from "../store/dopsReducer.js";
import { openOrder } from "../store/modalsReducer.js";

function Rassrochka() {
  const dispatch = useDispatch();
  const [rassrochkaStep, setRassrochkaStep] = useState([
    "Нажмите кнопку «Купить в рассрочку».",
    "В появившемся окне выберите нужную комплектацию.",
    "Нажмите «Заказать».",
  ]);
  const [rassrochkaItems, setRassrochkaItems] = useState([
    {
      title: "Доставка",
      text: "по всей России от 1 до 5&nbsp;дней<br/> курьером или ТК",
      imgs: ["dpd", "delovie-linii", "pochta", "peck"],
    },
    {
      title: "Оплата",
      text: "картой или наличными<br/>после получения товара",
      imgs: ["mastercard", "mir", "visa"],
    },
  ]);
  function getRassPrice(sum) {
    const priceFormat = (num) => new Intl.NumberFormat("ru-RU").format(num);
    return priceFormat(Math.floor(Number(sum) / 4));
  }
  const product_482820 = useSelector(
    (state) => state.dops.product_482820.price
  );
  return (
    <section id="rassrochka" className="rassrochka">
      <div className="content-container">
        <div className="row">
          {rassrochkaItems.map((rassItem, id) => (
            <RassrochkaItem item={rassItem} key={id} />
          ))}
          <div className="rassrochka__bank-box">
            <div className="rassrochka__bank-img-wrap">
              <Image
                mobil={true}
                media={576}
                srcImgMob={`build/images/rassrochka/tinkoff-logo.png`}
                srcSourceMob={`build/images/rassrochka/tinkoff-logo.webp`}
                srcImg={`build/images/rassrochka/tinkoff-logo_mobil.png`}
                srcSource={`build/images/rassrochka/tinkoff-logo_mobil.webp`}
                altImg={"Тинькофф"}
              />
              <p className="rassrochka__bank-title">
                Рассрочка от&nbsp;Тинькофф
              </p>
              <p className="rassrochka__bank-subtitle">
                на 4 месяца без процентов и переплат
              </p>
            </div>
            <div className="rassrochka__bank-text-wrap">
              <ul className="rassrochka__bank-list">
                {rassrochkaStep.map((step, idx) => (
                  <li className="rassrochka__bank-list-item" key={idx}>
                    <b>Шаг&nbsp;{idx + 1}</b>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="rassrochka__bank-price-box">
                <button
                  onClick={() => {
                    dispatch(addRassrochka(true));
                    dispatch(openOrder(true));
                  }}
                  className="rassrochka__btn btn-anim"
                >
                  Купить в рассрочку
                </button>
                <p className="rassrochka__bank-price">
                  От <span>{getRassPrice(product_482820)}</span>&nbsp;руб. /
                  мес.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rassrochka;
