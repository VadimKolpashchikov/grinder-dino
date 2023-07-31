import React, { useState } from "react";
import Image from "../components/Image.jsx";
function Potential() {
  const [potentialList, setPotentialList] = useState([
    {
      title: "Обрабатывайте «сложные» детали<br/> и поверхности",
      text: "Конструкция позволяет найти и зафиксировать самое удобное положение станка",
    },
    {
      title: "Работайте с любым сырьём<br/> без&nbsp;риска&nbsp;брака",
      text: "Правильное натяжение ленты гарантирует деликатную обработку <b>дерева, металла, стекла, керамики, пластика и полимеров</b>",
    },
    {
      title: "Качество изделий не хуже, чем на промышленном производстве",
      text: "Высокоточные измерительные приборы позволяют обрабатывать заготовки с точностью до 0,1 градуса",
    },
  ]);
  return (
    <section id="potential" className="potential">
      <div className="content-container">
        <div className="row">
          <div className="title-box">
            <h2 className="title">
              Используйте <span className="text-primary">весь потенциал</span>
              <br />
              ленточного гриндера
            </h2>
            <p className="subtitle">
              Возможности профессионального оборудования в&nbsp;вашей мастерской
            </p>
          </div>

          <ul className="potential__list">
            {potentialList.map((item, i) => (
              <li className="potential__item" key={i}>
                <div className="potential__item-img">
                  <Image
                    srcImg={`build/images/potential/potential-${i + 1}.png`}
                    srcSource={`build/images/potential/potential-${i + 1}.webp`}
                    altImg={"Потенциал ленточного гриндера"}
                  />
                </div>
                <div className="potential__item-text-wrap">
                  <p
                    className="potential__item-title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></p>
                  <p
                    className="potential__item-text"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></p>
                </div>
              </li>
            ))}
          </ul>
          <div className="potential__img-wrap">
            <Image
              mobil={true}
              media={420}
              srcImgMob={`build/images/potential/potential-img.png`}
              srcSourceMob={`build/images/potential/potential-img.webp`}
              srcImg={`build/images/potential/potential-img_mobil.png`}
              srcSource={`build/images/potential/potential-img_mobil.webp`}
              altImg={"1 абразивная лента + DINO ="}
            />
          </div>
        </div>
        {/* <div className="potential__label-wrap">
              <p className="potential__label text-white">
                Для тех, кто знает свое дело!
              </p>
            </div> */}
      </div>
    </section>
  );
}

export default Potential;
