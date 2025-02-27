import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__toggle"
        id="navin-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <label htmlFor="navin-toggle" className="navigation__button">
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__background"></div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              о нас
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              скидки
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              лучшие туры
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              калькулятор цены
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              связаться с нами
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
