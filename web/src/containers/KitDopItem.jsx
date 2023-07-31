import React from "react";
import { addDopKit } from "../store/kitReducer";
import { useDispatch, useSelector } from "react-redux";
import { openInfo } from "../store/modalsReducer";
import { addCurrentId } from "../store/dopsInfoReducer";

function KitDopItem({ item, index }) {
  const dispatch = useDispatch();
  const dops = useSelector((state) => state.kit.dopsState);

  function changeCheckboxDops(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = Number(target.name);
    for (let i = 0; i < dops.length; i++) {
      if (i == name) {
        dops[i].selected = value;
      }
    }
    dispatch(addDopKit(dops));
  }
  return (
    <li className="kit__item">
      <div className="kit__item-content">
        <label className="kit__item-checkbox checkbox">
          <input
            checked={item.selected}
            onChange={(e) => changeCheckboxDops(e)}
            name={index}
            className="checkbox__disabled"
            type="checkbox"
          />
          <span className="checkbox__active"></span>
        </label>
        <div className="kit__item-img">
          <picture>
            <source srcSet={item.webp} type="image/webp" />
            <img src={item.image} alt="#" />
          </picture>
        </div>
      </div>
      <div className="kit__item-row">
        <span
          className="kit__item-name"
          onClick={() => {
            dispatch(addCurrentId(item.id));
            dispatch(openInfo(true));
          }}
          dangerouslySetInnerHTML={{ __html: item.name }}
        ></span>
        <div className="kit__item-prices">
          <span className="kit__new-price">{item.priceF} руб.</span>
          <span className="kit__old-price">{item.oldPriceF} руб.</span>
        </div>
      </div>
    </li>
  );
}

export default KitDopItem;
