import React, { useState } from "react";
function Features() {
  const [featuresList, setFeaturesList] = useState([
    {
      title: "Оплата при получении",
      text: "Наличными или банковской картой<br/> после проверки товара",
    },
    {
      title: "Доставка по всей России",
      text: "От 1 до 5 дней: до двери<br/> или в ближайший пункт выдачи",
    },
    {
      title: "Срок службы - более 10&nbsp;лет",
      text: "Мы предлагаем расширенную<br/> гарантию на 24 месяца",
    },
  ]);
  return (
    <section id="features" className="features">
      <div className="content-container">
        <div className="row">
          {featuresList.map((feature, i) => (
            <div className="features__item" key={i}>
              <div className="features__img-wrap">
                <img
                  src={`build/images/features/feature-${i + 1}.svg`}
                  alt={feature.title}
                />
              </div>
              <p
                className="features__title text-primary"
                dangerouslySetInnerHTML={{ __html: feature.title }}
              ></p>
              <p
                className="features__text"
                dangerouslySetInnerHTML={{ __html: feature.text }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
