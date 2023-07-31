import React, { useState } from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import InputMask from "react-input-mask";
import { closeModal, openThankReview } from "../store/modalsReducer.js";
function ModalReview({ setSendedReview }) {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.modals.ModalReviewActive);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [validate, setValidate] = useState(false);
  function sendReview(e) {
    e.preventDefault();
    if (!name.length || !phone.length || !text.length) {
      setValidate(true);
    } else {
      setValidate(false);
      dispatch(closeModal(false));
      dispatch(openThankReview(true));
      setSendedReview(true);
    }
  }
  return (
    <Modal modalClass={"modal-call"} active={activeModal}>
      <h3 className="modal-call__heading heading-center">Оставить отзыв</h3>
      <form>
        <div className="modal-call__inputs">
          <input
            className={`input ${validate && !name.length ? "unvalid" : ""}`}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
          />
          <InputMask
            mask="+7 999 999 99 99"
            className={`input ${validate && !phone.length ? "unvalid" : ""}`}
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7 (___)-___-__-__"
          />
          <textarea
            className={`input ${validate && !text.length ? "unvalid" : ""}`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ваш отзыв"
          ></textarea>
        </div>
        <button onClick={sendReview} className="modal-call__btn btn">
          Отправить
        </button>
      </form>
    </Modal>
  );
}

export default ModalReview;
