import React, { useState } from "react";
import Image from "../components/Image.jsx";
function Quality() {
  const [qualityList, setQualityList] = useState([
    {
      title: "Гарантия 2 года",
      text: "Мы предлагаем расширенную гарантию, потому что уверены в<br/> качестве своей продукции на все 100%",
    },
    {
      title: "Отгрузка в день заказа",
      text: "Вы получите гриндер в кратчайшие сроки (не более 7 дней)",
    },
    {
      title: "Экономия до 35 %",
      text: "Вы не переплачиваете посредникам и приобретаете товары<br/> по актуальным ценам",
    },
  ]);
  return (
    <section id="quality" className="quality">
      <div className="quality__img-wrap">
        <Image
          mobil={true}
          media={768}
          srcImgMob={`build/images/quality/quality-bg.jpg`}
          srcSourceMob={`build/images/quality/quality-bg.webp`}
          srcImg={`build/images/quality/quality-bg_mobil.jpg`}
          srcSource={`build/images/quality/quality-bg_mobil.webp`}
          altImg={"Производитель ГК «Геликон Пром»"}
        />
      </div>
      <div className="content-container">
        <div className="row">
          <div className="title-box">
            <h2 className="title">
              Гарантированное качество,
              <br /> а не гаражная сборка
            </h2>
            <p className="subtitle">
              Производитель ГК&nbsp;«Геликон&nbsp;Пром»
            </p>
          </div>
          <ul className="quality__list">
            {qualityList.map((item) => (
              <li className="quality__item" key={item.title}>
                <p className="quality__item-title text-primary">{item.title}</p>
                <p
                  className="quality__item-text"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Quality;
