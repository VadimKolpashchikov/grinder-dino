import React, { useState, useEffect, useRef } from "react";
import Image from "../components/Image.jsx";
import { Transition } from "react-transition-group";

function CustomersItemCompound({ item }) {
  const [moreTextActive, setMoreTextActive] = useState(true);
  const [heightMoreText, setHeightMoreText] = useState("");
  const transitionStyles = {
    entering: {
      maxHeight: heightMoreText.scrollHeight,
      opacity: 0.2,
    },
    entered: { maxHeight: heightMoreText.scrollHeight },
    exiting: { maxHeight: 0, opacity: 0 },
    exited: { maxHeight: 0, opacity: 0 },
  };

  const moreText = useRef();

  useEffect(() => {
    setHeightMoreText(moreText);

    const width = window.matchMedia("(max-width: 991px)");
    const handleWidth = () => {
      setMoreTextActive(!width.matches);
    };
    handleWidth();
    width.addListener(handleWidth);

    return () => {
      width.removeListener(handleWidth);
    };
  }, []);

  return (
    <div className="customers__slide customers__slide-compound">
      {item.map((el, idx) =>
        !el.additional ? (
          <div className="customers__slide-item" key={idx}>
            <div className="customers__slide-img-wrap">
              <Image
                srcImg={`build/images/customers/${el.img}.png`}
                srcSource={`build/images/customers/${el.img}.webp`}
                altImg={el.title}
              />
            </div>
            <p
              className={`customers__slide-name customers__slide-name_${el.type}`}
              dangerouslySetInnerHTML={{ __html: el.name }}
            ></p>
            <p
              className="customers__slide-text"
              dangerouslySetInnerHTML={{ __html: el.text }}
            ></p>
          </div>
        ) : (
          ""
        )
      )}

      <Transition in={moreTextActive} timeout={200}>
        {(state) => (
          <div
            ref={moreText}
            className={`customers__slide-text_more ${state}`}
            style={{ ...transitionStyles[state] }}
          >
            {item.map((el, idx) =>
              el.additional ? (
                <div className="customers__slide-item" key={idx}>
                  <div className="customers__slide-img-wrap">
                    <Image
                      srcImg={`build/images/customers/${el.img}.png`}
                      srcSource={`build/images/customers/${el.img}.webp`}
                      altImg={el.title}
                    />
                  </div>
                  <p
                    className={`customers__slide-name customers__slide-name_${el.type}`}
                    dangerouslySetInnerHTML={{ __html: el.name }}
                  ></p>
                  <p
                    className="customers__slide-text"
                    dangerouslySetInnerHTML={{ __html: el.text }}
                  ></p>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        )}
      </Transition>

      <button
        className="customers__slide-btn-show-more"
        onClick={() => setMoreTextActive(!moreTextActive)}
      >
        {moreTextActive ? "Скрыть" : " Показать полностью"}
      </button>
    </div>
  );
}

export default CustomersItemCompound;
