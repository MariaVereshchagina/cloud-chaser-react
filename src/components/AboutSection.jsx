import React from "react";
import Button from "./Button";
import photo1 from "/assets/photo-ballons-1.png";
import photo1Small from "/assets/photo-ballons-1-small.png";
import photo2 from "/assets/photo-ballons-2.png";
import photo2Small from "/assets/photo-ballons-2-small.png";
import photo3 from "/assets/photo-ballons-3.png";
import photo3Small from "/assets/photo-ballons-3-small.png";

const AboutSection = () => {
  return (
    <section className="section-about">
      <div className="text-align-center margin-bottom-80px">
        <h2 className="title-secondary">ОЩУТИТЬ ПОЛЁТ В ДУШЕ</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="title-thrid margin-bottom-10px">
            ПОЗВОЛЬТЕ СЕБЕ ПРИКЛЮЧЕНИЕ
          </h3>
          <p className="paragraph margin-bottom-30px">
            Поднимитесь над землёй и ощутите свободу, паря среди облаков. Наши
            опытные пилоты обеспечат безопасность и комфорт на каждом этапе
            вашего небесного путешествия.
          </p>
          <h3 className="title-thrid margin-bottom-10px">
            ВВЕРХ НА 6000 МЕТРОВ НАД УРОВНЕМ МОРЯ
          </h3>
          <p className="paragraph margin-bottom-30px">
            Полёт на воздушном шаре — это не просто путешествие, это возможность
            увидеть мир с высоты птичьего полёта. Мы предлагаем вам незабываемый
            опыт, который останется с вами навсегда.
          </p>
          <Button className="btn-text margin-bottom-50px" href="#">
            Узнать больше →
          </Button>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={"/assets/photo-ballons-1.png"}
              srcSet={`${photo1} 954w, ${photo1Small} 318w`}
              sizes="(max-width: 1240px) 23vw, (max-width: 900px) 43vw, (max-width: 600px) 47vw, 300px"
              alt="photo-ballons-1"
              className="composition__photo composition__photo_n1"
            />
            <img
              src={photo2}
              srcSet={`${photo2} 954w, ${photo2Small} 318w`}
              sizes="(max-width: 1240px) 23vw, (max-width: 900px) 43vw, (max-width: 600px) 47vw, 300px"
              alt="photo-ballons-2"
              className="composition__photo composition__photo_n2"
            />
            <img
              src={photo3}
              srcSet={`${photo3} 954w, ${photo3Small} 318w`}
              sizes="(max-width: 1240px) 23vw, (max-width: 900px) 43vw, (max-width: 600px) 47vw, 300px"
              alt="photo-ballons-3"
              className="composition__photo composition__photo_n3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
