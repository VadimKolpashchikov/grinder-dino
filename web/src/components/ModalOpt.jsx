import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";
function ModalOpt() {
  const activeModal = useSelector((state) => state.modals.ModalOptActive);
  const csrf = '1'
  return (
    <Modal modalId={"modal-opt"} modalClass={"modal-opt"} active={activeModal}>
      <h3 className="modal-opt__heading">Обращение в оптовый отдел</h3>
      <form method="post">
        <div className="modal-opt__inputs">
          <input className="input" placeholder="Имя" name="name" type="text" />
          <input
            className="input require"
            placeholder="+7 (___)-___-__-__"
            name="phone"
            type="text"
          />
          <input
            className="input require"
            placeholder="E-mail"
            name="mail"
            type="text"
          />
          <input
            className="input require"
            placeholder="Город"
            name="city"
            type="text"
          />
        </div>
        <div className="modal-opt__textarea">
          <textarea
            className="input"
            placeholder="Комментарий (необязательно)"
          />
        </div>
        <button type="submit" className="modal-opt__btn btn">
          Отправить
        </button>
      </form>
    </Modal>
  );
}

export default ModalOpt;
