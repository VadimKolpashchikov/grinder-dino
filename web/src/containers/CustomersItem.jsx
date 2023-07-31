import React from "react";
import Image from "../components/Image.jsx";

function CustomersItem(props) {
  return (
    <div className="customers__slide">
      <div className="customers__slide-img-wrap">
        <Image
          srcImg={`build/images/customers/customers-img-${props.img}.png`}
          srcSource={`build/images/customers/customers-img-${props.img}.webp`}
          altImg={props.item.title}
        />
      </div>

      <div className="customers__slide-customer-wrap">
        <div className="customers__slide-customer-img">
          <Image
            srcImg={`build/images/customers/customers-${props.img}.png`}
            srcSource={`build/images/customers/customers-${props.img}.webp`}
            altImg={props.item.title}
          />
        </div>
        <div className="customers__slide-customer-unfo">
          <p
            className="customers__slide-name"
            dangerouslySetInnerHTML={{ __html: props.item.title }}
          ></p>
          <p
            className="customers__slide-prof"
            dangerouslySetInnerHTML={{ __html: props.item.prof }}
          ></p>
        </div>
      </div>

      <div className="customers__slide-text-wrap">
        <p
          className="customers__slide-text"
          dangerouslySetInnerHTML={{ __html: props.item.text }}
        ></p>
        {props.item.textTwo ? (
          <p
            className="customers__slide-text"
            dangerouslySetInnerHTML={{ __html: props.item.textTwo }}
          ></p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CustomersItem;
