import Button from "./Button";
import feedback1 from "/assets/feedBack-1.jpg";
import feedback2 from "/assets/feedBack-2.jpg";
import videoMp4 from "/assets/Hot air balloons-2.mp4";
import videoWebm from "/assets/Hot air balloons-1.webm";

const FeedbackSection = () => {
  const feedbacks = [
    {
      img: feedback1,
      name: "ЛИЗА ФРОЛОВА",
      title: "Я ПОЛУЧИЛ МАССУ ВПЕЧАТЛЕНИЙ",
      text: "Полёт на воздушном шаре превзошёл все мои ожидания! Ощущение свободы, когда ты паришь над землёй, и виды, открывающиеся с высоты, просто завораживают. Организация была на высоте, а команда сделала всё, чтобы этот день стал незабываемым.",
    },
    {
      img: feedback2,
      name: "АНТОН РЯБИН",
      title: "ЭТО БЫЛО ВЕЛИКОЛЕПНО И НЕЗАБЫВАЕМО",
      text: "Невероятное приключение с потрясающими видами! Подняться над облаками и увидеть закат с высоты — это мечта, ставшая реальностью. Всё прошло гладко, а пилоты вдохновили своим профессионализмом.",
    },
  ];

  return (
    <section className="section-feedBack">
      <div className="bg-gradient"></div>
      <video className="bg-video" autoPlay muted loop>
        <source src={videoMp4} type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
      </video>
      <div className="text-align-center margin-bottom-80px">
        <h2 className="title-secondary title-secondary_white">
          ОТЗЫВЫ НАШИХ КЛИЕНТОВ
        </h2>
      </div>
      {feedbacks.map((feedback, index) => (
        <div className="row" key={index}>
          <div className="feedBack-card">
            <figure className="feedBack-card__img">
              <img src={feedback.img} alt="" />
              <figcaption className="feedBack-card__name">
                {feedback.name}
              </figcaption>
            </figure>
            <div className="feedBack-card__box">
              <h3 className="title-thrid margin-bottom-10px">
                {feedback.title}
              </h3>
              <p className="paragraph">{feedback.text}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="text-align-center margin-bottom-80px">
        <Button className="btn btn_animated" href="#">
          ЗАБРОНИРОВАТЬ
        </Button>
      </div>
    </section>
  );
};

export default FeedbackSection;
