import React, { useEffect } from "react";
import axios from "axios";

function Shops() {
  useEffect(() => {
    setTimeout(() => {
      getShops();
    }, 1000);
  });
  //получение списка магазинов для карты внизу сайта
  async function getShops() {
    await axios
      .get("https://apispn.ru/json/shops/")
      .then(function (response) {
        // handle success
        let citiesJSON = JSON.parse(response.data);

        // создание карты с метками
        let script = document.createElement("script");
        script.setAttribute("async", "");
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        document.querySelector("body").appendChild(script);

        script.onload = function () {
          ymaps.ready(function () {
            let myMap = new ymaps.Map("shop-map", {
              center: [55.75222, 37.61556],
              zoom: 10,
              controls: ["zoomControl"],
            });

            citiesJSON.forEach(function (inx) {
              let city = inx.city;
              inx.shops.forEach(function (shop) {
                let mark = new ymaps.Placemark(
                  shop.coords,
                  {
                    hasHint: true,
                    hintContent: "Градус Хаус в г. " + city + ", " + shop.name,
                  },
                  {
                    // Необходимо указать данный тип макета.
                    iconLayout: "default#image",

                    // Своё изображение иконки метки.
                    iconImageHref: "build/images/global/shops-icon.svg",

                    // Размеры метки.
                    iconImageSize: [48, 65],

                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38],
                  }
                );

                mark.events.add("click", function (e) {
                  myMap.hint.open(
                    shop.coords,
                    " Градус Хаус в г. " + city + ", " + shop.name
                  );
                });

                myMap.geoObjects.add(mark);
              });
            });
          });
        };
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <section className="shops">
      <div className="content-container">
        <div className="shops__title-box">
          <h3 className="shops__heading">
            Наши магазины
            <br />— теперь и сервисные центры
          </h3>
          <p className="shops__subtitle">В них вы сможете:</p>
        </div>

        <div className="shops__row">
          <ul className="shops__list">
            <li className="shops__item">
              Приобрести трубогибы, станки холодной ковки, пескоструйные
              аппараты и множество других товаров для хобби.
            </li>
            <li className="shops__item">
              Оформить заявку на самовывоз и забрать товар, купленный в
              интернет-магазине.
            </li>
          </ul>
          <ul className="shops__list">
            <li className="shops__item">Оформить скидочную карту.</li>
            <li className="shops__item">
              Сдать товар по гарантии, оформить возврат или обмен без лишней
              бюрократии.
            </li>
            <li className="shops__item">Получить консультацию специалистов.</li>
          </ul>
        </div>
      </div>
      <div className="shops__wrapper">
        <div id="shop-map"></div>
      </div>
    </section>
  );
}

export default Shops;
