import React from "react";
import { Transition } from "react-transition-group";

function KitTapeImg({ item }) {
  return (
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
  );
}

export default KitTapeImg;
