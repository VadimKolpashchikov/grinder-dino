import React from "react";
import { useDispatch } from "react-redux";
import { closeModal, openSuccess, openThankSuccess } from "../store/modalsReducer.js";
function ModalSetting() {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <span id="close-modals" onClick={() => dispatch(closeModal(false))}></span>
      <span id="open-success" onClick={() => dispatch(openSuccess(true))}></span>
      <span id="open-thank-success" onClick={() => dispatch(openThankSuccess(true))}></span>
    </React.Fragment>
  );
}

export default ModalSetting;