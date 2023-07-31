const defaultState = {
  сurrentDate: rusData,
  webp: webpSup,
  year: dataYear,
  test: testParam,
  month: rusMonth,
  monthName : saleMonth
};

const DATE_CURRENT = "DATE_CURRENT";
const WEBP_CURRENT = "WEBP_CURRENT";
const YEAR_CURRENT = "YEAR_CURRENT";
const TEST_CURRENT = "TEST_CURRENT";
const MONTH_CURRENT = "MONTH_CURRENT";

export const phpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DATE_CURRENT:
      return { ...state, сurrentDate: action.payload };
    case WEBP_CURRENT:
      return { ...state, webp: action.payload };
    case YEAR_CURRENT:
      return { ...state, year: action.payload };
    case TEST_CURRENT:
      return { ...state, test: action.payload };
    case MONTH_CURRENT:
      return { ...state, month: action.payload };
    default:
      return state;
  }
};

export const date = payload => ({ type: DATE_CURRENT, payload });
export const webp = payload => ({ type: WEBP_CURRENT, payload });
