import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";
function ModalInfo() {
  const activeModal = useSelector((state) => state.modals.ModalInfoActive);
  const dopsInfo = useSelector((state) => state.dopsInfo.dopsState);
  const currentId = useSelector((state) => state.dopsInfo.currentId);
  return (
    <Modal modalClass={"modal-info"} active={activeModal}>
      {dopsInfo.map((item) => (
        <React.Fragment key={item.id}>
          {item.id == currentId ? (
            <div className="modal-info__row">
              <div className="modal-info__block-img">
                <div className="modal-info__img">
                  <picture>
                    <source srcSet={item.webp} type="image/webp" />
                    <img src={item.img} alt="" />
                  </picture>
                </div>
              </div>
              <div className="modal-info__content">
                <h3>{item.name}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.desc,
                  }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      ))}
    </Modal>
  );
}

export default ModalInfo;
