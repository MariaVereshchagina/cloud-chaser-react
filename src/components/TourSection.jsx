import React from "react";
import Button from "./Button";

const TourSection = () => {
  const tours = [
    {
      title1: "ГРУППОВЫЕ",
      title2: "ТУРЫ",
      imgClass: "card-tour__img_1",
      descr: [
        "От 6 до 12 человек",
        "Продолжительность 1,5 часа",
        "Сопровождение гида",
        "Маршрут до 8 км",
        "Фото на память",
      ],
    },
    {
      title1: "ЧАСТНЫЕ",
      title2: "ТУРЫ",
      imgClass: "card-tour__img_2",
      descr: [
        "До 4 человек",
        "Продолжительность 2 часа",
        "Персональный пилот",
        "Маршрут до 12 км",
        "Шампанское в полёте",
      ],
    },
    {
      title1: "СМОТРОВЫЕ",
      title2: "ПЛОЩАДКИ",
      imgClass: "card-tour__img_3",
      descr: [
        "Группы от 3 человек",
        "Продолжительность 1 час",
        "Гид-экскурсовод",
        "Полёт над городом",
        "Сертификат участника",
      ],
    },
  ];

  return (
    <section className="section-tour">
      <div className="text-align-center margin-bottom-80px">
        <h2 className="title-secondary">НЕВЕРОЯТНОЕ ОЩУЩЕНИЕ СВОБОДЫ</h2>
      </div>
      <div className="row">
        {tours.map((tour, index) => (
          <div className="col-1-of-3" key={index}>
            <div className="card-tour">
              <div className="card-tour__side card-tour__side_front">
                <div
                  className={`card-tour__img ${tour.imgClass} margin-bottom-50px`}
                ></div>
                <h4 className="card-tour__title">
                  <span className="card-tour__span card-tour__span_1">
                    {tour.title1}
                  </span>
                  <br />
                  <span className="card-tour__span card-tour__span_2">
                    {tour.title2}
                  </span>
                </h4>
                <div className="card-tour__descr">
                  <ul>
                    {tour.descr.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-tour__side card-tour__side_back">
                <div className="card-tour__backSide-box">
                  <p className="card-tour__text card-tour__text_1">
                    ПОЛНАЯ СТОИМОСТЬ:
                  </p>
                  <p className="card-tour__text card-tour__text_2">5990₽</p>
                  <Button className="btn btn_animated" href="#">
                    ЗАБРОНИРОВАТЬ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-align-center margin-bottom-80px">
        <Button className="btn btn_animated" href="#">
          ЗАБРОНИРОВАТЬ
        </Button>
      </div>
    </section>
  );
};

export default TourSection;
