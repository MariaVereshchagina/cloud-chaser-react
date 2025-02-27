import React from "react";
import logo from "/assets/Icon-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row text-align-center">
        <a href="#">
          <img src={logo} alt="logo" className="footer__logo" />
        </a>
      </div>
      <div className="row">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              о нас
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              скидки
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              лучшие туры
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              калькулятор цены
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              связаться с нами
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
