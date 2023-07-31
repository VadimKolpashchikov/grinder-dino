import React, { useEffect } from "react";
import "./modal.scss";
import { closeModal } from "../../store/modalsReducer.js";
import { useDispatch } from "react-redux";
function Modal({ modalClass, modalId, active, children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (active) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [active]);
  return (
    <div
      className={active ? "modal modal-active" : "modal"}
      onClick={() => dispatch(closeModal(false))}
    >
      <div
        id={modalId}
        className={`${
          active ? "modal__content-active modal__content" : "modal__content"
        } ${modalClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal__close"
          onClick={() => dispatch(closeModal(false))}
        >
          <picture>
            <source srcSet="build/images/global/close-modal.webp" type="image/webp" />
            <img src="build/images/global/close-modal.png" alt="" />
          </picture>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
