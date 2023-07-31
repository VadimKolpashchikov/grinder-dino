import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Transition } from "react-transition-group";
import { openCall } from "../store/modalsReducer.js";
import { useDispatch } from "react-redux";
function HeaderTop({ classItem, links, phone, phoneLink}) {
  const dispatch = useDispatch();
  const [burger, setBurger] = useState(false);
  return (
    <div className={`${classItem} header-top`}>
      <div className="content-container">
        <div className="header-top__row">
          <div className="header-top__logo">
            <span className="header-top__logo-name">DINO</span>
            <span className="header-top__logo-border"></span>
            <span className="header-top__logo-info">
              Официальный сайт производителя
            </span>
          </div>
          <Transition in={burger} timeout={0}>
            {state => (
              <nav className={`header-top__nav ${state}`}>
                <ul className="header-top__list">
                  {links.map(item => (
                    <li key={item.name} className="header-top__item">
                      <Link
                        to={item.to}
                        smooth={"easeInOutQuad"}
                        offset={item.offset}
                        duration={item.duration}
                        className="header-top__link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="header-top__feedback">
                  <a className="header-top__phone" href={`tel:${phoneLink}`}>
                    {phone}
                  </a>
                  <button
                    onClick={() => dispatch(openCall(true))}
                    className="header-top__btn-call"
                  >
                    Заказать звонок
                  </button>
                </div>
              </nav>
            )}
          </Transition>
          <div
            onClick={() => setBurger(!burger)}
            className="header-top__burger"
          >
            <span
              className={`header-top__burger-icon ${burger ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
