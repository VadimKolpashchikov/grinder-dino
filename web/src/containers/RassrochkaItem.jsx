import React from "react";
import Image from "../components/Image.jsx";
function RassrochkaItem({ item }) {
  return (
    <div className="rassrochka__item-box">
      <div className="rassrochka__item-wrap">
        <p className="rassrochka__item-title text-primary">{item.title}</p>
        <p
          className="rassrochka__item-text"
          dangerouslySetInnerHTML={{ __html: item.text }}
        ></p>
        <div className="rassrochka__item-imgs-wrap">
          {item.imgs.map((el) => (
            <div className="rassrochka__item-img-wrap" key={el}>
              <Image
                mobil={true}
                media={576}
                srcImgMob={`build/images/rassrochka/${el}.png`}
                srcSourceMob={`build/images/rassrochka/${el}.webp`}
                srcImg={`build/images/rassrochka/${el}_mobil.png`}
                srcSource={`build/images/rassrochka/${el}_mobil.webp`}
                altImg={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RassrochkaItem;
