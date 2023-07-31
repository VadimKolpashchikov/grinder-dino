import React from "react";
import Image from "../components/Image.jsx";
import { useDispatch } from "react-redux";
import { openAppeal, openCall } from "../store/modalsReducer.js";
function Feedback() {
  const dispatch = useDispatch();
  return (
    <section id="feedback" className="feedback">
      <div className="content-container">
        <div className="feedback__wrapper">
          <div className="feedback__head title-box">
            <h3 className="title">У вас Остались вопросы?</h3>
            <p className="subtitle">Мы с радостью поможем на них ответить</p>
          </div>

          <div className="feedback__content">
            <div className="feedback__content-wrap">
              <div className="feedback__content-img-box">
                <Image
                  srcImg={`build/images/global/helicon-logo.png`}
                  srcSource={`build/images/global/helicon-logo.webp`}
                  altImg={"Helicon"}
                />
              </div>
              <div className="feedback__content-text-box">
                <a className="feedback__phone" href="tel:88002505932">
                  8 800 250 59 32
                </a>
                <button
                  className="feedback__btn"
                  onClick={() => dispatch(openCall(true))}
                >
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>

          <div className="feedback__images">
            <div className="feedback__img">
              <Image
                mobil={true}
                media={768}
                srcImgMob={`build/images/feedback/feedback-item-1.png`}
                srcSourceMob={`build/images/feedback/feedback-item-1.webp`}
                srcImg={"build/images/feedback/feedback-item-1_mobil.png"}
                srcSource={"build/images/feedback/feedback-item-1_mobil.webp"}
                altImg={"Колл-центр"}
              />
              <div className="feedback__block-ask">
                <button
                  onClick={() => {
                    dispatch(openAppeal(true));
                  }}
                  className="feedback__ask"
                >
                  Задать вопрос на&nbsp;горячую&nbsp;линию
                </button>
              </div>
            </div>
            <div className="feedback__img">
              <Image
                mobil={true}
                media={768}
                srcImgMob={`build/images/feedback/feedback-item-2.png`}
                srcSourceMob={`build/images/feedback/feedback-item-2.webp`}
                srcImg={"build/images/feedback/feedback-item-2_mobil.png"}
                srcSource={"build/images/feedback/feedback-item-2_mobil.webp"}
                altImg={"Конструкторский отдел"}
              />
              <div className="feedback__block-ask">
                <button
                  onClick={() => {
                    dispatch(openAppeal(true));
                  }}
                  className="feedback__ask"
                >
                  Задать вопрос конструкторскому&nbsp;отделу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
