import React from "react";
import { addDopKit, addMainKit } from "../store/kitReducer";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";

function KitDopImg({ item }) {
  const dispatch = useDispatch();
  const dops = useSelector((state) => state.kit.dopsState);
  function addDopMobile(id) {
    for (let i = 0; i < dops.length; i++) {
      if (id == dops[i].id) {
        dops[i].selected = !dops[i].selected;
      }
    }
    dispatch(addDopKit(dops));
  }
  return (
    <React.Fragment>
      <Transition in={item.selected} timeout={200}>
        {(state) => (
          <div className={`kit__img dops-${item.sort} ${state}`}>
            <picture>
              <source srcSet={item.kitWebp} type="image/webp" />
              <img src={item.kitImg} alt="#" />
            </picture>
          </div>
        )}
      </Transition>
      <div
        onClick={() => addDopMobile(item.id)}
        className={`kit__icon dops-icon-${item.sort} ${
          item.selected ? "active" : ""
        }`}
      >
        <span></span>
      </div>
    </React.Fragment>
  );
}

export default KitDopImg;
