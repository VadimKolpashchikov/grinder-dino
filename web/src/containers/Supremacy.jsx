import React, { useState } from "react";
function Supremacy() {
  const [supremacyList, setSupremacyList] = useState([
    `<b>В поиске новых идей,</b><br/>
      мы постоянно обновляем конструкции
      производимых товаров`,
    `<b>Только лучшее —</b><br/>
      всё оборудование и материалы проходят
      тщательную проверку`,
    `<b>С 2012 года мы производим</b><br/>
    качественные товары, используя
    экологичные технологии производства`,
  ]);
  return (
    <section id="supremacy" className="supremacy">
      <div className="content-container">
        <div className="row">
          <ul className="supremacy__list">
            {supremacyList.map((item, i) => (
              <li className="supremacy__item" key={i}>
                <div className="supremacy__item-img">
                  <img
                    src={`build/images/supremacy/supremacy-${i + 1}.svg`}
                    alt="Превосходство"
                  />
                </div>
                <p
                  className="supremacy__item-text text-white"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Supremacy;
