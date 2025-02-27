import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="/assets/Icon-logo.svg"
        alt="Логотип воздушный шар"
      />
      <div className="header__box">
        <h1 className="title-first">
          <span className="title-first__main">ПОЛЁТЫ НА ШАРАХ</span>
          <span className="title-first__secondary">ваш путь к облакам</span>
        </h1>
        <Button className="btn btn_animated" href="#">
          наш каталог
        </Button>
      </div>
    </header>
  );
};

export default Header;
