import React, { useState, useMemo, useEffect } from "react";
import Dropdown from "../components/Dropdown.jsx";
import { addMainKit } from "../store/kitReducer";
import { useSelector, useDispatch } from "react-redux";
import KitDopItem from "./KitDopItem.jsx";
import KitMainImg from "./KitMainImg.jsx";
import KitDopImg from "./KitDopImg.jsx";
import { openTape } from "../store/modalsReducer.js";
import KitTapeImg from "./KitTapeImg.jsx";
import { Transition } from "react-transition-group";
import { addRassrochka } from "../store/dopsReducer.js";
import useWindowWidth from "../hooks/useWindowWidth.jsx";

function Kit() {
  const dispatch = useDispatch();
  const dops = useSelector((state) => state.kit.dopsState);
  const mainDops = useSelector((state) => state.kit.mainProductsState);
  const rassrochka = useSelector((state) => state.dops.rassrochka);
  const kitTape = useSelector((state) => state.kit.kitTapeState);
  const totalPriceKitTape = useSelector((state) => state.kit.totalPriceKitTape);
  const totalOldPriceKitTape = useSelector(
    (state) => state.kit.totalOldPriceKitTape
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const windowWidth = useWindowWidth(767);
  const csrf = '1'

  useMemo(() => {
    setTotalPrice(
      totalPriceKitTape +
        mainDops.reduce((sum, item) => {
          if (item.selected) {
            return sum + item.price;
          }
          return sum;
        }, 0) +
        dops.reduce((sum, item) => {
          if (item.selected) {
            return sum + item.price;
          }
          return sum;
        }, 0)
    );
  }, [dops, mainDops, totalPriceKitTape]);

  return (
    <section className="kit">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            Сделайте работу гриндера{" "}
            <span className="text-primary">ещё&nbsp;эффективнее</span>
          </h3>
          <p className="subtitle">Вместе с полезными дополнениями</p>
        </div>

        <div className="kit__box">
          <div className="kit__block-list">
            <ul className="kit__list">
              {dops.map((item, index) => (
                <KitDopItem item={item} index={index} key={item.id} />
              ))}
              <li className="kit__item">
                <div
                  onClick={() => dispatch(openTape(true))}
                  className="kit__item-content set"
                >
                  <div className="kit__item-checkbox checkbox">
                    <span
                      className={`checkbox__active ${
                        totalPriceKitTape > 0 ? "active-checkbox" : ""
                      }`}
                    ></span>
                  </div>
                  <div className="kit__item-img">
                    <picture>
                      <source
                        srcSet="build/images/kit/kit-dop-lenta.webp"
                        type="image/webp"
                      />
                      <img src="build/images/kit/kit-dop-lenta.png" alt="#" />
                    </picture>
                  </div>
                </div>
                <div className="kit__item-row">
                  <span
                    className="kit__item-name"
                    onClick={() => dispatch(openTape(true))}
                  >
                    Выбор набора лент
                    <br />
                    <span>(нажмите, чтобы открыть)</span>
                  </span>
                  <div className="kit__item-prices">
                    <span className="kit__new-price">
                      {totalPriceKitTape} руб.
                    </span>
                    <span className="kit__old-price">
                      {totalOldPriceKitTape} руб.
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="kit__block-images">
            <div className="kit__images">
              {dops.map((item) => (
                <KitDopImg item={item} key={item.id} />
              ))}
              {!windowWidth ? (
                kitTape.map((item) => <KitTapeImg item={item} key={item.id} />)
              ) : (
                <React.Fragment>
                  <Transition in={totalPriceKitTape > 0} timeout={200}>
                    {(state) => (
                      <div className={`kit__img dops-tape ${state}`}>
                        <picture>
                          <source
                            srcSet="build/images/kit/kit-dop-5.webp"
                            type="image/webp"
                          />
                          <img src="build/images/kit/kit-dop-5.webp" alt="#" />
                        </picture>
                      </div>
                    )}
                  </Transition>
                  <div
                    onClick={() => dispatch(openTape(true))}
                    className={`kit__icon dops-icon-tape ${
                      totalPriceKitTape > 0 ? "active" : ""
                    }`}
                  >
                    <span></span>
                  </div>
                </React.Fragment>
              )}

              {mainDops.map((item, index) => (
                <KitMainImg key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
          <div className="kit__block-form">
            <div className="kit__form form-kit">
              <h3 className="form-kit__heading">Заказ</h3>
              <Dropdown
                classItem="form-kit__dropdown"
                payload={addMainKit}
                mainDops={mainDops}
              />
              <ul className="form-kit__list">
                {dops.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.selected ? (
                      <li className="form-kit__item">
                        <span className="form-kit__item-name">
                          <span
                            dangerouslySetInnerHTML={{ __html: item.name }}
                          ></span>
                        </span>
                        <span className="form-kit__item-price">
                          {item.priceF} руб.
                        </span>
                      </li>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
                {kitTape.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.selected ? (
                      <li className="form-kit__item">
                        <span className="form-kit__item-name">
                          <span
                            dangerouslySetInnerHTML={{ __html: item.name }}
                          ></span>
                        </span>
                        <span className="form-kit__item-price">
                          {item.price * item.count.toLocaleString()} руб.
                        </span>
                      </li>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </ul>

              <div className="form-kit__total-price">
                Итого:
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              <form action="sendOrder.php" method="post" className="spnForm">
                <div className="form-kit__inputs">
                  <input
                    className="input form-kit__name"
                    type="text"
                    name="name"
                    placeholder="Имя"
                  />
                  <input
                    className="input"
                    type="text"
                    name="phone"
                    placeholder="+7 (___)-___-__-__"
                  />

                  <input type="hidden" name="quantity[482187]" value="1" />
                  <input type="hidden" name="id[]" value="482187" />

                  {dops.map((item) => (
                    <React.Fragment key={item.id}>
                      <input
                        type="hidden"
                        name={`quantity[${item.id}]`}
                        value={item.selected ? 1 : 0}
                      />
                      <input type="hidden" name="id[]" value={item.id} />
                    </React.Fragment>
                  ))}

                  {mainDops.map((item) => (
                    <React.Fragment key={item.id}>
                      <input
                        type="hidden"
                        name={`quantity[${item.id}]`}
                        value={item.selected ? 1 : 0}
                      />
                      <input type="hidden" name="id[]" value={item.id} />
                    </React.Fragment>
                  ))}

                  {kitTape.map((item) => (
                    <React.Fragment key={item.id}>
                      <input
                        type="hidden"
                        name={`quantity[${item.id}]`}
                        value={item.selected ? item.count : 0}
                      />
                      <input type="hidden" name="id[]" value={item.id} />
                    </React.Fragment>
                  ))}
                  <input type="hidden" className="url" name="url" />
                  <input type="hidden" className="gmt" name="gmt" />
                  <input
                    type="hidden"
                    className="comment"
                    name="comment"
                    value={rassrochka ? "Покупка в рассрочку" : ""}
                  />
                  <input type="hidden" name="csrf" value={csrf} />
                  <input
                    type="text"
                    name="tel"
                    style={{
                      height: "0!important",
                      width: "0!important",
                      margin: "0!important",
                      padding: "0!important",
                      lineHeight: "0!important",
                      position: "absolute",
                      left: "-10000px",
                    }}
                  />
                </div>
                <div className="form-kit__block-bottom">
                  <p className="form-kit__info">
                    Менеджеры свяжутся с вами в ближайшее время для уточнения
                    деталей заказа
                  </p>
                  <div className="form-kit__block-order">
                    <label className="checkbox-v2 form-kit__rassrochka">
                      <input
                        checked={rassrochka}
                        onChange={() => dispatch(addRassrochka(!rassrochka))}
                        className="checkbox-v2__disabled"
                        type="checkbox"
                      />
                      <span className="checkbox-v2__active"></span>
                      <span className="checkbox-v2__name">
                        Покупка в рассрочку
                      </span>
                    </label>
                    <button
                      className="form-kit__btn btn btn-anim"
                      type="submit"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kit;
