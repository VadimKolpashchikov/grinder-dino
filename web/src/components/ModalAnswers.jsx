import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";

function ModalAnswers({ answers }) {
  const activeModal = useSelector((state) => state.modals.ModalAnswersActive);
  return (
    <Modal
      modalId={"modal-answers"}
      modalClass={"modal-answers"}
      active={activeModal}
    >
      <div className="modal-answers__wrap">
        <p
          dangerouslySetInnerHTML={{ __html: answers.title }}
          className="modal-answers__title"
        ></p>
        <p
          dangerouslySetInnerHTML={{ __html: answers.text }}
          className="modal-answers__text"
        ></p>
      </div>
    </Modal>
  );
}

export default ModalAnswers;
