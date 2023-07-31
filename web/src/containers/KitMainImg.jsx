import React from "react";
import { Transition } from "react-transition-group";

function KitMainImg({ item, index }) {
  return (
    <Transition in={item.selected} timeout={0}>
      {(state) => (
        <div className={`kit__img kit__main-img main-${index} ${state}`}>
          <picture>
            <source srcSet={item.kitWebp} type="image/webp" />
            <img src={item.kitImage} alt="#" />
          </picture>
        </div>
      )}
    </Transition>
  );
}

export default KitMainImg;
