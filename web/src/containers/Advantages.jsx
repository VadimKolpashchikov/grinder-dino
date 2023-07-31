import React, { useState } from "react";
import { Transition } from "react-transition-group";
import { useSelector } from "react-redux";
import { LazyLoadComponent } from "react-lazy-load-image-component";
function Advantages() {
  const webp = useSelector((state) => state.php.webp);
  const [advantagesList, setAdvantagesList] = useState([
    {
      id: 1,
      name: `LITE`,
      list: [
        "Опорный столик с двумя регулировками: изменение угла от ленты и расстояния до ленты за счёт ножки столика.",
      ],
      img: "build/images/advantages/advantages-item-1.png",
      webp: "build/images/advantages/advantages-item-1.webp",
      video: "video/advantages-1.mp4",
      active: false,
    },
    {
      id: 2,
      name: `STANDART`,
      list: [
        "Опорный столик с двумя регулировками: изменение угла от ленты и наклона.",
        "Выдвижной ригель для опорного столика изменяет расстояние до ленты.",
        "Поворотная станина на 90° (увеличивается площадь для обработки, можно шлифовать и снимать ржавчину).",
      ],
      img: "build/images/advantages/advantages-item-2.png",
      webp: "build/images/advantages/advantages-item-2.webp",
      video: "video/advantages-2.mp4",
      active: false,
    },
    {
      id: 3,
      name: `PREMIUM`,
      list: [
        "Возможность обработки контуровочным модулем с роликами на 95 и 50 мм (под вогнутые спуски).",
        "Опорный столик с двумя регулировками: изменение угла от ленты и наклона.",
        "Выдвижной ригель для опорного столика изменяет расстояние до ленты.",
        "Поворотная станина на 90°.",
        "Возможность поворота гриндера на 360° вокруг основания.",
      ],
      img: "build/images/advantages/advantages-item-3.png",
      webp: "build/images/advantages/advantages-item-3.webp",
      video: "video/advantages-3.mp4",
      active: true,
    },
  ]);
  function changeTab(index) {
    setAdvantagesList((prev) => {
      for (let i = 0; i < prev.length; i++) {
        prev[i].active = false;
      }
      prev[index].active = true;
      return JSON.parse(JSON.stringify(prev));
    });
  }
  return (
    <section id="advantages" className="advantages">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            DINO подстроится <span className="text-primary">под&nbsp;вас</span>
          </h3>
          <p className="subtitle">
            Поворотная станина + регулируемый опорный столик
          </p>
        </div>

        <div className="advantages__row">
          <div className="advantages__img">
            {advantagesList.map((item) => (
              <Transition key={item.id} in={item.active} timeout={0}>
                {(state) => (
                  <LazyLoadComponent>
                    <video
                      autoPlay="autoplay"
                      preload="none"
                      loop="loop"
                      muted
                      poster={webp == "webp" ? item.webp : item.img}
                      className={state}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </LazyLoadComponent>
                )}
              </Transition>
            ))}
          </div>
          <div className="advantages__tabs">
            <ul className="advantages__tabs-list">
              {advantagesList.map((item, i) => (
                <li
                  key={item.id}
                  onClick={() => changeTab(i)}
                  className={`advantages__tabs-name ${
                    item.active ? "active" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.name }}
                ></li>
              ))}
            </ul>
            {advantagesList.map((item) => (
              <Transition key={item.id} in={item.active} timeout={0}>
                {(state) => (
                  <div className={`advantages__content ${state}`}>
                    <h3 className="advantages__content-heading">
                      Модель{" "}
                      <span
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      ></span>
                    </h3>
                    <ul className="advantages__content-list">
                      {item.list.map((listItem, i) => (
                        <li
                          key={i}
                          className="advantages__content-item"
                          dangerouslySetInnerHTML={{ __html: listItem }}
                        ></li>
                      ))}
                    </ul>
                  </div>
                )}
              </Transition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
