import React, { useState } from "react";
import Button from "./Button";

const BookSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tourType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form className="form" onSubmit={handleSubmit}>
              <div className="text-align-center margin-bottom-30px">
                <h2 className="title-secondary">ЗАБРОНИРОВАТЬ ТУР</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Имя и фамилия"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="form__label">
                  Ваше Имя и фамилия
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Ваш email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form__label">
                  Почтовый адрес
                </label>
              </div>
              <div className="form__group">
                <div className="form__group-radio">
                  <input
                    type="radio"
                    className="form__input-radio"
                    id="tour-1"
                    name="tourType"
                    value="group"
                    onChange={handleChange}
                  />
                  <label htmlFor="tour-1" className="form__label-radio">
                    <span className="form__button-radio"></span>Групповой тур
                  </label>
                </div>
                <div className="form__group-radio">
                  <input
                    type="radio"
                    className="form__input-radio"
                    id="tour-2"
                    name="tourType"
                    value="individual"
                    onChange={handleChange}
                  />
                  <label htmlFor="tour-2" className="form__label-radio">
                    <span className="form__button-radio"></span>Индивидуальный
                    тур
                  </label>
                </div>
              </div>
              <div className="form__group">
                <Button className="btn btn_brown" type="submit">
                  ЗАБРОНИРОВАТЬ
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
