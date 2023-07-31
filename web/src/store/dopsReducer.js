const dopsItems = {
  482130: {
    sort: 1,
    name: "Резисторный регулятор",
    selected: false,
  },
  481439: {
    sort: 2,
    name: "Электронапильник для болгарки (насадка)",
    selected: false,
  },
  481435: {
    sort: 3,
    name: "Дубликатор углов",
    selected: false,
  },
  481436: {
    sort: 4,
    name: "Магнитный угол",
    selected: false,
  },
  482006: {
    sort: 5,
    name: "Набор лент 1200 мм",
    selected: false,
  },
  481617: {
    sort: 5,
    name: "Набор лент 610 мм",
    selected: false,
  },
  482005: {
    sort: 6,
    name: "Набор лент 915 мм",
    selected: false,
  },
};
const mainProductsItems = {
  482820: {
    name: "Модель LITE",
    img: "build/images/order-modal/main-dop-1",
    webp: "build/images/order-modal/main-dop-1",
    selected: true,
  },
  482821: {
    name: "Модель STANDART",
    img: "build/images/order-modal/main-dop-2",
    webp: "build/images/order-modal/main-dop-2",
    selected: false,
  },
  482822: {
    name: "Модель PREMIUM",
    img: "build/images/order-modal/main-dop-3",
    webp: "build/images/order-modal/main-dop-3",
    selected: false,
  },
};
const dops = [];
const mainProducts = [];
for (let item in goods) {
  if (
    item == "482130" ||
    item == "481439" ||
    item == "481435" ||
    item == "481436" ||
    item == "482006" ||
    item == "481617" ||
    item == "482005"
  ) {
    dops.push({ id: item, ...goods[item], ...dopsItems[item] });
  }
}
for (let item in goods) {
  if (item == "482820" || item == "482821" || item == "482822") {
    mainProducts.push({ id: item, ...goods[item], ...mainProductsItems[item] });
  }
}
const defaultState = {
  dopsState: dops,
  mainProductsState: mainProducts,
  rassrochka: false,
  product_482820: goods[482820],
  product_482821: goods[482821],
  product_482822: goods[482822],
  product_482006: goods[482006],
  product_482005: goods[482005],
  product_481617: goods[481617],
};

const ADD_DOPS = "ADD_DOPS";
const ADD_MAIN = "ADD_MAIN";
const ADD_RASSROCHKA = "ADD_RASSROCHKA";

export const dopsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DOPS:
      return { ...state, dopsState: [...action.payload] };
    case ADD_MAIN:
      return { ...state, mainProductsState: [...action.payload] };
    case ADD_RASSROCHKA:
      return { ...state, rassrochka: action.payload };
    default:
      return state;
  }
};

export const addDop = (payload) => ({ type: ADD_DOPS, payload });
export const addMain = (payload) => ({ type: ADD_MAIN, payload });
export const addRassrochka = (payload) => ({ type: ADD_RASSROCHKA, payload });
