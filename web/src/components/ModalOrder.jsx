import React, { useState, useMemo } from "react";
import Modal from "./Modal/Modal.jsx";
import Dropdown from "./Dropdown.jsx";
import Image from "./Image.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Transition } from "react-transition-group";
import { addDop, addMain, addRassrochka } from "../store/dopsReducer.js";
function ModalOrder() {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.modals.ModalOrderActive);
  const mainProducts = useSelector((state) => state.dops.mainProductsState);
  const dops = useSelector((state) => state.dops.dopsState);
  const rassrochka = useSelector((state) => state.dops.rassrochka);
  const [totalPrice, setTotalPrice] = useState(0);
  const [watchDops, setWatchDops] = useState(true);
  const csrf = '1'
  const test = useSelector((state) => state.php.test);

  function changeCheckboxDops(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = Number(target.name);
    for (let i = 0; i < dops.length; i++) {
      if (i == name) {
        dops[i].selected = value;
      }
    }
    dispatch(addDop(dops));
  }

  useMemo(() => {
    setTotalPrice(
      dops.reduce((sum, item) => {
        if (item.selected) {
          return sum + item.price;
        }
        return sum;
      }, 0) +
        mainProducts.reduce((sum, item) => {
          if (item.selected) {
            return sum + item.price;
          }
          return sum;
        }, 0)
    );
  }, [dops, mainProducts]);
  return (
    <Modal modalClass={"modal-order"} active={activeModal}>
      <div className="modal-order__box">
        <div className="modal-order__block-image">
          <div className="modal-order__logo">
            <span className="modal-order__logo-name">DINO</span>
            <span className="modal-order__logo-border"></span>
            <span className="modal-order__logo-info">
              Официальный сайт производителя
            </span>
          </div>
          <div className="modal-order__image">
            {mainProducts.map((item) => (
              <Transition key={item.id} in={item.selected} timeout={0}>
                {(state) => (
                  <Image
                    classImg={state}
                    mobil={true}
                    media={576}
                    srcImgMob={`${item.img}.png`}
                    srcSourceMob={`${item.img}.webp`}
                    srcImg={`${item.img}_mobil.png`}
                    srcSource={`${item.img}_mobil.webp`}
                    altImg={item.name}
                  />
                )}
              </Transition>
            ))}
          </div>
        </div>
        <div className="modal-order__block-content">
          <h3 className="modal-order__heading">Оформление заказа</h3>
          <p className="modal-order__desc">
            Мы свяжемся с Вами в течение 10 минут и уточним детали доставки
          </p>
          <Dropdown
            classItem="modal-order__dropdown"
            payload={addMain}
            mainDops={mainProducts}
          />
          <h3 className="modal-order__list-heading">Доп. товары</h3>
          <ul className="modal-order__list">
            {dops.map((item, i) => (
              <li
                key={item.id}
                className={`modal-order__item ${
                  i > 2 && watchDops ? "hidden" : ""
                }`}
              >
                <label className="modal-order__item-checkbox checkbox">
                  <input
                    checked={item.selected}
                    name={i}
                    onChange={(e) => changeCheckboxDops(e)}
                    className="checkbox__disabled"
                    type="checkbox"
                  />
                  <span className="checkbox__active"></span>
                  <span className="checkbox__name">{item.name}</span>
                </label>
                <span className="modal-order__item-price">
                  {item.price.toLocaleString()}&nbsp;руб.
                </span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setWatchDops(!watchDops)}
            className="modal-order__watch"
          >
            {watchDops ? "Показать полностью" : "Скрыть"}
          </button>
        </div>
        <div className="modal-order__block-order">
          <h3 className="modal-order__heading mobile">Оформление заказа</h3>

          <form
            action="sendOrder.php"
            method="post"
            className="modal-order__form form-order spnForm"
          >
            <div className="form-order__column">
              <div className="form-order__inputs">
                <input
                  placeholder="Имя"
                  className="input"
                  type="text"
                  name="name"
                />
                <input
                  placeholder="Номер телефона"
                  className="input"
                  type="text"
                  name="phone"
                />
              </div>

              {mainProducts.map((item) => (
                <React.Fragment key={item.id}>
                  <input
                    type="hidden"
                    name={`quantity[${item.id}]`}
                    value={item.selected ? 1 : 0}
                  />
                  <input type="hidden" name="id[]" value={item.id} />
                </React.Fragment>
              ))}
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

              <div className="form-order__row-img">
                <Image
                  srcImg={"build/images/order-modal/order-icon-1.png"}
                  srcSource={"build/images/order-modal/order-icon-1.webp"}
                  altImg={"#"}
                />
                <Image
                  srcImg={"build/images/order-modal/order-icon-2.png"}
                  srcSource={"build/images/order-modal/order-icon-2.webp"}
                  altImg={"#"}
                />
                <Image
                  srcImg={"build/images/order-modal/order-icon-3.png"}
                  srcSource={"build/images/order-modal/order-icon-3.webp"}
                  altImg={"#"}
                />
                <Image
                  srcImg={"build/images/order-modal/order-icon-4.png"}
                  srcSource={"build/images/order-modal/order-icon-4.webp"}
                  altImg={"#"}
                />
              </div>
            </div>
            <div className="form-order__column">
              <button type="text" name="submit" className="form-order__btn btn">
                Заказать
              </button>
              <label className="checkbox-v2 form-order__rassrochka">
                <input
                  checked={rassrochka}
                  onChange={() => dispatch(addRassrochka(!rassrochka))}
                  className="checkbox-v2__disabled"
                  type="checkbox"
                />
                <span className="checkbox-v2__active"></span>
                <span className="checkbox-v2__name">Покупка в рассрочку</span>
              </label>
            </div>
          </form>
          <p className="modal-order__desc mobile">
            Мы свяжемся с Вами в течение 10 минут и уточним детали доставки
          </p>
        </div>
        <div className="modal-order__block-total">
          <span className="modal-order__total-price">
            Итого <span className="hidden">к оплате</span>:
            <span className="bold">{totalPrice.toLocaleString()} ₽</span>
          </span>
          <div className="form-order__row-img mobile">
            <Image
              srcImg={"build/images/order-modal/order-icon-1.png"}
              srcSource={"build/images/order-modal/order-icon-1.webp"}
              altImg={"#"}
            />
            <Image
              srcImg={"build/images/order-modal/order-icon-2.png"}
              srcSource={"build/images/order-modal/order-icon-2.webp"}
              altImg={"#"}
            />
            <Image
              srcImg={"build/images/order-modal/order-icon-3.png"}
              srcSource={"build/images/order-modal/order-icon-3.webp"}
              altImg={"#"}
            />
            <Image
              srcImg={"build/images/order-modal/order-icon-4-mob.png"}
              srcSource={"build/images/order-modal/order-icon-4-mob.webp"}
              altImg={"#"}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalOrder;
