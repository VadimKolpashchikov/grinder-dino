import React, { useMemo, useState } from "react";
import Image from "../components/Image.jsx";
import { Transition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { addDop } from "../store/dopsReducer.js";
import { openOrder } from "../store/modalsReducer.js";
function Tape() {
  const dispatch = useDispatch();
  const product_482820 = useSelector((state) => state.dops.product_482820);
  const product_482821 = useSelector((state) => state.dops.product_482821);
  const product_482822 = useSelector((state) => state.dops.product_482822);
  const product_481617 = useSelector((state) => state.dops.product_481617);
  const product_482005 = useSelector((state) => state.dops.product_482005);
  const product_482006 = useSelector((state) => state.dops.product_482006);
  const dops = useSelector((state) => state.dops.dopsState);
  const mainProducts = useSelector((state) => state.dops.mainProductsState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalOldPrice, setTotalOldPrice] = useState(0);
  const [tapeList, setTapeList] = useState([
    {
      id: 1,
      name: "LITE",
      list: [
        `<b>Количество роликов:</b> 2`,
        `<b>Длина ленты:</b> 610 мм`,
        `<b>Ресурс ленты:</b> ≈10 часов`,
      ],
      img: "build/images/tape/tape-item-2.png",
      webp: "build/images/tape/tape-item-2.webp",
      products: [
        {
          id: 482820,
          name: "Гриндер DINO LITE",
          price: product_482820.price,
          oldPrice: product_482820.oldPrice,
          img: "build/images/tape/grinder-610.png",
          webp: "build/images/tape/grinder-610.webp",
          selected: false,
          disabled: true,
        },
        {
          id: 481617,
          name: "Набор лент 610 мм",
          price: product_481617.price,
          oldPrice: product_481617.oldPrice,
          img: "build/images/tape/lenta-915.png",
          webp: "build/images/tape/lenta-915.webp",
          selected: false,
          disabled: false,
        },
      ],
      active: false,
    },
    {
      id: 2,
      name: "STANDART",
      list: [
        `<b>Количество роликов:</b> 4`,
        `<b>Длина ленты:</b> 915 мм`,
        `<b>Ресурс ленты:</b> ≈18 часов`,
      ],
      img: "build/images/tape/tape-item-1.png",
      webp: "build/images/tape/tape-item-1.png",
      products: [
        {
          id: 482821,
          name: "Гриндер DINO STANDART",
          price: product_482821.price,
          oldPrice: product_482821.oldPrice,
          img: "build/images/tape/grinder-915.png",
          webp: "build/images/tape/grinder-915.webp",
          selected: false,
          disabled: true,
        },
        {
          id: 482005,
          name: "Набор лент 915 мм",
          price: product_482005.price,
          oldPrice: product_482005.oldPrice,
          img: "build/images/tape/lenta-915.png",
          webp: "build/images/tape/lenta-915.webp",
          selected: false,
          disabled: false,
        },
      ],
      active: false,
    },
    {
      id: 3,
      name: "PREMIUM",
      list: [
        `<b>Количество роликов:</b> 4`,
        `<b>Длина ленты:</b> 1200 мм`,
        `<b>Ресурс ленты:</b> ≈32 часа`,
      ],
      img: "build/images/tape/tape-item-3.png",
      webp: "build/images/tape/tape-item-3.png",
      products: [
        {
          id: 482822,
          name: "Гриндер DINO PREMIUM",
          price: product_482822.price,
          oldPrice: product_482822.oldPrice,
          img: "build/images/tape/grinder-1200.png",
          webp: "build/images/tape/grinder-1200.webp",
          selected: true,
          disabled: true,
        },
        {
          id: 482006,
          name: "Набор лент 1200 мм",
          price: product_482006.price,
          oldPrice: product_482006.oldPrice,
          img: "build/images/tape/lenta-915.png",
          webp: "build/images/tape/lenta-915.webp",
          selected: true,
          disabled: false,
        },
      ],
      active: true,
    },
  ]);
  function changeTab(index) {
    setTapeList((prev) => {
      for (let i = 0; i < prev.length; i++) {
        prev[i].active = false;
        for (let a = 0; a < prev[i].products.length; a++) {
          prev[i].products[a].selected = false;
          prev[index].products[a].selected = true;
        }
      }
      prev[index].active = true;
      return JSON.parse(JSON.stringify(prev));
    });
  }
  function changeCheckbox(e, index) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = Number(target.name);
    setTapeList((prev) => {
      for (let i = 0; i < tapeList[index].products.length; i++) {
        if (i == name) {
          tapeList[index].products[i].selected = value;
        }
      }
      return JSON.parse(JSON.stringify(prev));
    });
  }
  function addProducts(index) {
    for (let i = 0; i < dops.length; i++) {
      dops[i].selected = false;
      for (let a = 0; a < tapeList[index].products.length; a++) {
        if (
          tapeList[index].products[a].id == dops[i].id &&
          tapeList[index].products[a].selected
        ) {
          dops[i].selected = true;
        }
      }
    }
    for (let i = 0; i < mainProducts.length; i++) {
      mainProducts[i].selected = false;
      for (let a = 0; a < tapeList[index].products.length; a++) {
        if (
          tapeList[index].products[a].id == mainProducts[i].id &&
          tapeList[index].products[a].selected
        ) {
          mainProducts[i].selected = true;
        }
      }
    }
    dispatch(addDop(dops));
    dispatch(openOrder(true));
  }
  useMemo(() => {
    setTotalPrice(
      tapeList
        .map((item) =>
          item.products.reduce((sum, productsItem) => {
            if (productsItem.selected) {
              return sum + productsItem.price;
            }
            return sum;
          }, 0)
        )
        .reduce((sum, value) => sum + value, 0)
    );
    setTotalOldPrice(
      tapeList
        .map((item) =>
          item.products.reduce((sum, productsItem) => {
            if (productsItem.selected) {
              return sum + productsItem.oldPrice;
            }
            return sum;
          }, 0)
        )
        .reduce((sum, value) => sum + value, 0)
    );
  }, [tapeList]);
  return (
    <section id="tape" className="tape">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            Избавьтесь <span className="text-primary">от лишних трат</span>
          </h3>
          <p className="subtitle">
            Выберите гриндер и ленту конкретно под ваши задачи
          </p>
        </div>
        <div className="tape__row">
          <div className="tape__img">
            {tapeList.map((item) => (
              <Transition key={item.id} in={item.active} timeout={0}>
                {(state) => (
                  <Image
                    srcImg={item.img}
                    srcSource={item.webp}
                    altImg={"#"}
                    classImg={state}
                  />
                )}
              </Transition>
            ))}
          </div>
          <div className="tape__tabs">
            <div className="tape__tabs-wrapper">
              <ul className="tape__tabs-list">
                {tapeList.map((item, i) => (
                  <li
                    key={item.id}
                    onClick={() => changeTab(i)}
                    className={`tape__tabs-name ${item.active ? "active" : ""}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              {tapeList.map((item) => (
                <Transition key={item.id} in={item.active} timeout={0}>
                  {(state) => (
                    <div className={`tape__content ${state}`}>
                      <ul className="tape__content-list">
                        {item.list.map((listItem, i) => (
                          <li
                            key={i}
                            className="tape__content-item"
                            dangerouslySetInnerHTML={{ __html: listItem }}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Transition>
              ))}
            </div>
            {tapeList.map((item, i) => (
              <Transition key={item.id} in={item.active} timeout={0}>
                {(state) => (
                  <div className={`tape__order ${state}`}>
                    <ul className="tape__order-list">
                      {item.products.map((productItem, productIndex) => (
                        <li
                          key={productItem.id}
                          className="tape__order-item item-tape"
                        >
                          <div className="item-tape__content">
                            <label
                              className="item-tape__checkbox checkbox"
                              style={
                                productItem.disabled
                                  ? {
                                      filter: "grayscale(1)",
                                      cursor: "default",
                                    }
                                  : {}
                              }
                            >
                              <input
                                className="checkbox__disabled"
                                type="checkbox"
                                disabled={productItem.disabled}
                                name={productIndex}
                                checked={productItem.selected}
                                onChange={(e) => changeCheckbox(e, i)}
                              />
                              <span className="checkbox__active"></span>
                            </label>
                            <div className="item-tape__img">
                              <picture>
                                <source
                                  srcSet={productItem.webp}
                                  type="image/webp"
                                />
                                <img src={productItem.img} alt="#" />
                              </picture>
                            </div>
                          </div>
                          <div className="item-tape__row">
                            <span className="item-tape__name">
                              {productItem.name}
                            </span>
                            <div className="item-tape__prices">
                              <span className="item-tape__new-price">
                                {productItem.price.toLocaleString()}&nbsp;руб.
                              </span>
                              <span className="item-tape__old-price">
                                {productItem.oldPrice.toLocaleString()}
                                &nbsp;руб.
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="tape__prices">
                      <span className="tape__new-price">
                        {totalPrice.toLocaleString()}&nbsp;руб.
                      </span>
                      <span className="tape__old-price">
                        {totalOldPrice.toLocaleString()}&nbsp;руб.
                      </span>
                    </div>
                    <button
                      onClick={() => addProducts(i)}
                      className="tape__btn btn"
                    >
                      Заказать
                    </button>
                  </div>
                )}
              </Transition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tape;
