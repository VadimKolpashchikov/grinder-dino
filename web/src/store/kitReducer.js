const dopsItems = {
  482130: {
    sort: 1,
    name: "Регулятор напряжения, 10 кВт",
    image: "build/images/kit/kit-item-1.png",
    webp: "build/images/kit/kit-item-1.webp",
    kitImage: "build/images/kit/kit-dop-1.png",
    kitWebp: "build/images/kit/kit-dop-1.webp",
    selected: false,
  },
  481439: {
    sort: 2,
    name: "Электронапильник<br/> для болгарки (насадка)",
    image: "build/images/kit/kit-item-2.png",
    webp: "build/images/kit/kit-item-2.webp",
    kitImage: "build/images/kit/kit-dop-2.png",
    kitWebp: "build/images/kit/kit-dop-2.webp",
    selected: false,
  },
  481435: {
    sort: 3,
    name: "Дубликатор углов",
    image: "build/images/kit/kit-item-3.png",
    webp: "build/images/kit/kit-item-3.webp",
    kitImage: "build/images/kit/kit-dop-3.png",
    kitWebp: "build/images/kit/kit-dop-3.webp",
    selected: false,
  },
  481436: {
    sort: 4,
    name: "Магнитный угол",
    image: "build/images/kit/kit-item-4.png",
    webp: "build/images/kit/kit-item-4.webp",
    kitImage: "build/images/kit/kit-dop-4.png",
    kitWebp: "build/images/kit/kit-dop-4.webp",
    selected: false,
  },
};
const mainProductsItems = {
  482820: {
    name: "Модель LITE",
    kitImage: "build/images/kit/main-item-1.png",
    kitWebp: "build/images/kit/main-item-1.webp",
    selected: false,
  },
  482821: {
    name: "Модель STANDART",
    kitImage: "build/images/kit/main-item-2.png",
    kitWebp: "build/images/kit/main-item-2.webp",
    selected: true,
  },
  482822: {
    name: "Модель PREMIUM",
    kitImage: "build/images/kit/main-item-3.png",
    kitWebp: "build/images/kit/main-item-3.webp",
    selected: false,
  },
};

const kitTapeItems = {
  481617: {
    sort: 5,
    name: "Ленты 610 мм",
    img: "build/images/kit/kit-item-5.png",
    webp: "build/images/kit/kit-item-5.webp",
    kitImage: "build/images/kit/kit-dop-5.png",
    kitWebp: "build/images/kit/kit-dop-5.webp",
    count: 0,
    selected: false,
  },
  482005: {
    sort: 6,
    name: "Ленты 915 мм",
    img: "build/images/kit/kit-item-5.png",
    webp: "build/images/kit/kit-item-5.webp",
    kitImage: "build/images/kit/kit-dop-6.png",
    kitWebp: "build/images/kit/kit-dop-6.webp",
    count: 0,
    selected: false,
  },
  482006: {
    sort: 7,
    name: "Ленты для контуровки 1200 мм",
    img: "build/images/kit/kit-item-5.png",
    webp: "build/images/kit/kit-item-5.webp",
    kitImage: "build/images/kit/kit-dop-7.png",
    kitWebp: "build/images/kit/kit-dop-7.webp",
    count: 0,
    selected: false,
  },
};
const dops = [];
const mainProducts = [];
const kitTape = [];
for (let item in goods) {
  if (
    item == "482130" ||
    item == "481439" ||
    item == "481435" ||
    item == "481436"
  ) {
    dops.push({ id: item, ...goods[item], ...dopsItems[item] });
  }
}
for (let item in goods) {
  if (item == "482820" || item == "482821" || item == "482822") {
    mainProducts.push({ id: item, ...goods[item], ...mainProductsItems[item] });
  }
}
for (let item in goods) {
  if (item == "481617" || item == "482005" || item == "482006") {
    kitTape.push({ id: item, ...goods[item], ...kitTapeItems[item] });
  }
}
const defaultState = {
  dopsState: dops,
  mainProductsState: mainProducts,

  kitTapeState: kitTape,
  totalPriceKitTape: 0,
  totalOldPriceKitTape: 0,
};

const ADD_DOPS_KIT = "ADD_DOPS_KIT";
const ADD_MAIN_KIT = "ADD_MAIN_KIT";
const ADD_KIT_TAPE = "ADD_KIT_TAPE";
const ADD_KIT_TAPE_OLD_PRICE = "ADD_KIT_TAPE_OLD_PRICE";
const ADD_KIT_TAPE_PRICE = "ADD_KIT_TAPE_PRICE";

export const kitReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DOPS_KIT:
      return { ...state, dopsState: [...action.payload] };
    case ADD_MAIN_KIT:
      return { ...state, mainProductsState: [...action.payload] };
    case ADD_KIT_TAPE:
      return { ...state, kitTapeState: [...action.payload] };
    case ADD_KIT_TAPE_OLD_PRICE:
      return { ...state, totalOldPriceKitTape: action.payload };
    case ADD_KIT_TAPE_PRICE:
      return { ...state, totalPriceKitTape: action.payload };
    default:
      return state;
  }
};

export const addDopKit = (payload) => ({ type: ADD_DOPS_KIT, payload });
export const addMainKit = (payload) => ({ type: ADD_MAIN_KIT, payload });
export const addKitTape = (payload) => ({ type: ADD_KIT_TAPE, payload });
export const addKitTapePrice = (payload) => ({
  type: ADD_KIT_TAPE_PRICE,
  payload,
});
export const addKitTapeOldPrice = (payload) => ({
  type: ADD_KIT_TAPE_OLD_PRICE,
  payload,
});
