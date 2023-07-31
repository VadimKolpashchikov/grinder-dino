import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";
import Image from "./Image.jsx";

function ModalThankReview() {
  const activeModal = useSelector(
    (state) => state.modals.ModalThankReviewActive
  );
  return (
    <Modal modalClass={"modal-thank-success"} active={activeModal}>
      <h3 className="modal-thank-success__heading">
        Благодарим за то, что помогаете нам стать лучше!
      </h3>
      {/* <p className="modal-thank-success__desc">
        Менеджер изучит ваш вопрос и перезвонит в ближайшее время
      </p> */}
      <div className="modal-thank-success__img">
        <Image
          srcImg={"build/images/global/thankSuccess.png"}
          srcSource={"build/images/global/thankSuccess.webp"}
          altImg={"#"}
        />
      </div>
    </Modal>
  );
}

export default ModalThankReview;
