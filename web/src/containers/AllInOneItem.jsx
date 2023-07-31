import React from "react";
import Image from "../components/Image.jsx";
function AllInOneItem(props) {
  return (
    <div className="all-in-one__slider-item">
      <div className="all-in-one__slide-img-wrap">
        {/* <div className="all-in-one__slide-number all-in-one__slide-number_ab">
          <p>{props.number}</p>
        </div> */}
        <Image
          mobil={true}
          media={421}
          srcImgMob={`build/images/all-in-one/all-in-one-slide-img-${props.number}.jpg`}
          srcSourceMob={`build/images/all-in-one/all-in-one-slide-img-${props.number}.webp`}
          srcImg={`build/images/all-in-one/all-in-one-slide-img-${props.number}_mobile.png`}
          srcSource={`build/images/all-in-one/all-in-one-slide-img-${props.number}_mobile.webp`}
          altImg={"Причина выбора DINO"}
        />
      </div>
      <div className="all-in-one__slide-text-wrap">
        <div className="all-in-one__slide-number">
          <p>{props.number}</p>
        </div>
        <p
          className="all-in-one__slide-title"
          dangerouslySetInnerHTML={{ __html: props.item.title }}
        ></p>
        <p
          className="all-in-one__slide-text"
          dangerouslySetInnerHTML={{ __html: props.item.text }}
        ></p>
        <ul className="all-in-one__slide-list">
          {props.item.list.map((el, id) => (
            <li
              key={id}
              className="all-in-one__slide-list-item"
              dangerouslySetInnerHTML={{ __html: el }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllInOneItem;
