import React, { useEffect, useState } from "react";
import Modal from "./Modal/Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addKitTape,
  addKitTapeOldPrice,
  addKitTapePrice,
} from "../store/kitReducer.js";
import { closeModal } from "../store/modalsReducer.js";

function ModalKitDop() {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.modals.ModalTapeKitActive);
  const [set, setSet] = useState(
    useSelector((state) => state.kit.kitTapeState)
  );
  const [totalPrice, setTotalPrice] = useState(
    useSelector((state) => state.kit.totalPriceKitTape)
  );
  const [totalOldPrice, setTotalOldPrice] = useState(
    useSelector((state) => state.kit.totalOldPriceKitTape)
  );
  function addSet(id, action) {
    if (action == "increase") {
      setSet((prev) => {
        for (let i = 0; i < prev.length; i++) {
          if (prev[i].id == id) {
            prev[i].selected = true;
            prev[i].count = set[i].count + 1;
          }
        }
        return JSON.parse(JSON.stringify(prev));
      });
    }
    if (action == "decrease") {
      setSet((prev) => {
        for (let i = 0; i < prev.length; i++) {
          if (prev[i].id == id && prev[i].count >= 1) {
            prev[i].count = prev[i].count - 1;
            if (prev[i].count == 0) {
              prev[i].selected = false;
            }
          }
        }
        return JSON.parse(JSON.stringify(prev));
      });
    }
  }
  useEffect(() => {
    setTotalPrice(
      set.reduce((sum, item) => {
        if (item.selected) {
          return sum + item.price * item.count;
        }
        return sum;
      }, 0)
    );
    setTotalOldPrice(
      set.reduce((sum, item) => {
        if (item.selected) {
          return sum + item.oldPrice * item.count;
        }
        return sum;
      }, 0)
    );
  }, [set]);
  return (
    <Modal modalClass={"modal-kit-dop"} active={activeModal}>
      <div className="modal-kit-dop__content">
        <h3 className="modal-kit-dop__heading">Наборы из 3 лент</h3>
        <p className="modal-kit-dop__info">
          Выберите необходимый комплект, чтобы добавить в заказ
        </p>
        <ul className="modal-kit-dop__list">
          {set.map((item) => (
            <li key={item.id} className="modal-kit-dop__item">
              <div className="modal-kit-dop__item-img">
                <picture>
                  <source srcSet={item.webp} type="image/webp" />
                  <img src={item.img} alt="" />
                </picture>
              </div>
              <div className="modal-kit-dop__item-content">
                <span className="modal-kit-dop__item-name">{item.name}</span>
                <div className="modal-kit-dop__item-row">
                  <div className="modal-kit-dop__item-count">
                    <button
                      onClick={() => addSet(item.id, "decrease")}
                      className="modal-kit-dop__item-btn btn-minus"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="4"
                        viewBox="0 0 9 4"
                        fill="none"
                      >
                        <path
                          d="M0.54 3.672V0.76H8.24V3.672H0.54Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <span className="modal-kit-dop__item-total">
                      {item.count} шт.
                    </span>
                    <button
                      onClick={() => addSet(item.id, "increase")}
                      className="modal-kit-dop__item-btn btn-plus"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.776 13.5V0.899999H8.772V13.5H5.776ZM0.82 8.6V5.8H13.728V8.6H0.82Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <span className="modal-kit-dop__item-price">
                    {(item.price * item.count).toLocaleString()} ₽
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="modal-kit-dop__total">
          <span className="modal-kit-dop__price">
            {totalPrice.toLocaleString()} ₽
          </span>
          <button
            onClick={() => {
              dispatch(closeModal(false));
              dispatch(addKitTapePrice(totalPrice));
              dispatch(addKitTapeOldPrice(totalOldPrice));
              dispatch(addKitTape(set));
            }}
            className="modal-kit-dop__btn btn"
          >
            Заказать
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalKitDop;
