const defaultState = {
  ModalOrderActive: false,
  ModalFunctionalActive: false,
  ModalAnswersActive: false,
  ModalCallActive: false,
  ModalThankSuccessActive: false,
  ModalSuccessActive: false,
  ModalTapeKitActive: false,
  ModalInfoActive: false,
  ModalReviewActive: false,
  ModalAppealActive: false,
  ModalThankReviewActive: false,
};

const OPEN_ORDER = "OPEN_ORDER";
const OPEN_FUNCTIONAL = "OPEN_FUNCTIONAL";
const OPEN_ANSWERS = "OPEN_ANSWERS";
const CALL_MODAL = "CALL_MODAL";
const THANK_SUCCESS_MODAL = "THANK_SUCCESS_MODAL";
const SUCCESS_MODAL = "SUCCESS_MODAL";
const TAPE_MODAL = "TAPE_MODAL";
const OPEN_INFO = "OPEN_INFO";
const OPEN_REVIEW = "OPEN_REVIEW";
const OPEN_APPEAL = "OPEN_APPEAL";
const THANK_REVIEW_MODAL = "THANK_REVIEW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const modalsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_ORDER:
      return { ...state, ModalOrderActive: action.payload };
    case OPEN_FUNCTIONAL:
      return { ...state, ModalFunctionalActive: action.payload };
    case OPEN_ANSWERS:
      return { ...state, ModalAnswersActive: action.payload };
    case CALL_MODAL:
      return { ...state, ModalCallActive: action.payload };
    case THANK_SUCCESS_MODAL:
      return { ...state, ModalThankSuccessActive: action.payload };
    case SUCCESS_MODAL:
      return { ...state, ModalSuccessActive: action.payload };
    case TAPE_MODAL:
      return { ...state, ModalTapeKitActive: action.payload };
    case OPEN_INFO:
      return { ...state, ModalInfoActive: action.payload };
    case OPEN_APPEAL:
      return { ...state, ModalAppealActive: action.payload };
    case OPEN_REVIEW:
      return { ...state, ModalReviewActive: action.payload };
    case THANK_REVIEW_MODAL:
      return { ...state, ModalThankReviewActive: action.payload };
    case CLOSE_MODAL:
      return {
        ...state,
        ModalOrderActive: action.payload,
        ModalFunctionalActive: action.payload,
        ModalAnswersActive: action.payload,
        ModalCallActive: action.payload,
        ModalThankSuccessActive: action.payload,
        ModalSuccessActive: action.payload,
        ModalTapeKitActive: action.payload,
        ModalInfoActive: action.payload,
        ModalAppealActive: action.payload,
        ModalReviewActive: action.payload,
        ModalThankReviewActive: action.payload,
      };
    default:
      return state;
  }
};

export const openOrder = (payload) => ({ type: OPEN_ORDER, payload });
export const openFunctional = (payload) => ({ type: OPEN_FUNCTIONAL, payload });
export const openAnswers = (payload) => ({ type: OPEN_ANSWERS, payload });
export const openCall = payload => ({ type: CALL_MODAL, payload });
export const openThankSuccess = payload => ({ type: THANK_SUCCESS_MODAL, payload });
export const openSuccess = payload => ({ type: SUCCESS_MODAL, payload });
export const openTape = payload => ({ type: TAPE_MODAL, payload });
export const openInfo = payload => ({ type: OPEN_INFO, payload });
export const openAppeal = payload => ({ type: OPEN_APPEAL, payload });
export const openReview = payload => ({ type: OPEN_REVIEW, payload });
export const openThankReview = payload => ({ type: THANK_REVIEW_MODAL, payload });
export const closeModal = (payload) => ({ type: CLOSE_MODAL, payload });
