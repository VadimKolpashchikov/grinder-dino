const dopsItems = {
  "482130": {
    name: "Регулятор напряжения",
    img: "build/images/modal-info/item-1.png",
    webp: "build/images/modal-info/item-1.webp",
    desc: `
    <p>Устройство устраняет скачки напряжения в сети и плавно изменяет напряжение.</p>
    <h4>Регулятор оснащён:</h4>
    <ul>
      <li>цифровым дисплеем;</li>
      <li>вилкой для подключения в розетку.</li>
    </ul>
    <p class="bottom">На корпусе есть отверстия, чтобы установить устройство на стенеили столе.</p>
    `
  },
  "481439": {
    name: "Электронапильник для болгарки (насадка)",
    img: "build/images/modal-info/item-2.png",
    webp: "build/images/modal-info/item-2.webp",
    desc: `
    <h4>Характеристики:</h4>
    <ul>
      <li>Пружинный блок натяжения</li>
      <li>Закрытый подшипник</li>
      <li>Ролик из стали СТ-45</li>
      <li>В комплекте 1 лента 25х762 мм</li>
      <li>Работает с лентой 430-460 мм</li>
    </ul>
    `
  },
  "481435": {
    name: "Дубликатор углов",
    img: "build/images/modal-info/item-3.png",
    webp: "build/images/modal-info/item-3.webp",
    desc: `
    <p>Устройство с лёгкостью копирует контур любой сложности и помогает сделать правильную разметку с точностью до 1 мм.</p>
    <h4>Незаменим если вы:</h4>
    <ul>
      <li>Укладываете плитку</li>
      <li>Работаете с ламинатом</li>
      <li>Делаете ремонт в саду или даче</li>
      <li>Вырезаете отверстия под трубы</li>
    </ul>
    `
  },
  "481436": {
    name: "Магнитный угол",
    img: "build/images/modal-info/item-4.png",
    webp: "build/images/modal-info/item-4.webp",
    desc: `
    <p>Позволяет проводить монтаж и точно выставлять угол конструкции в одиночку. Снабжён мощным магнитом на 23 кг, покрыт порошковой краской.</p>
    <h4>Обеспечивает выставление углов:</h4>
    <ul>
      <li>30°</li>
      <li>45°</li>
      <li>60°</li>
      <li>75°</li>
      <li>90°</li>
      <li>135°</li>
    </ul>
    `
  },
};

const dops = [];

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

const defaultState = {
  dopsState: dops,
  currentId: ""
};

const ADD_DOPS_INFO = "ADD_DOPS_INFO";
const ADD_CURRENT_ID = "ADD_CURRENT_ID";

export const dopsInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DOPS_INFO:
      return { ...state, dopsState: [...action.payload] };
    case ADD_CURRENT_ID:
      return { ...state, currentId: action.payload };
    default:
      return state;
  }
};

export const addDopInfo = payload => ({ type: ADD_DOPS_INFO, payload });
export const addCurrentId = payload => ({ type: ADD_CURRENT_ID, payload });
