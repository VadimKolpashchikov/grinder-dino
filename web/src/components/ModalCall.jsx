import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";

function ModalCall() {
  const activeModal = useSelector((state) => state.modals.ModalCallActive);
  const csrf = '1'

  return (
    <Modal modalClass={"modal-call"} active={activeModal}>
      <h3 className="modal-call__heading">Заказать обратный звонок</h3>
      <form className="spnForm" action="sendCall.php">
        <div className="modal-call__inputs">
          <input className="input" type="text" name="name" placeholder="Имя" />
          <input
            className="input"
            type="text"
            name="phone"
            placeholder="+7 (___)-___-__-__"
          />
        </div>
        <input type="hidden" className="gmt" name="gmt" />
        <input type="hidden" className="url" name="url" />
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
        <input className="modal-call__btn btn" type="submit" value="Заказать"/>
      </form>
      <p className="modal-call__info">
        Мы свяжемся с Вами в течение 10 минут и проконсультируем по любым
        вопросам
      </p>
    </Modal>
  );
}

export default ModalCall;
