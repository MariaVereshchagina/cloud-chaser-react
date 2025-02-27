import React from "react";

const AdventureSection = () => {
  const adventures = [
    {
      icon: "icon-Vector-3",
      title: "ПОЛЁТ НА РАССВЕТЕ",
      text: "Насладитесь первыми лучами солнца с высоты, паря над утренними туманами. Это волшебное начало дня!",
    },
    {
      icon: "icon-Vector-2",
      title: "РОМАНТИКА ВЫСОТ",
      text: "Удивите вторую половинку полётом вдвоём над живописными пейзажами. Это будет лучший подарок!",
    },
    {
      icon: "icon-Vector",
      title: "СЕМЕЙНОЕ ПРИКЛЮЧЕНИЕ",
      text: "Насладитесь  лучами солнца с высоты, паря над утренними туманами. Это волшебное начало дня!",
    },
    {
      icon: "icon-Vector-1",
      title: "НОЧНОЙ ПОЛЁТ В НЕБО",
      text: "Погрузитесь в магию ночного неба, любуясь звёздами и огнями города с высоты птичьего полёта.Волшебно!",
    },
  ];

  return (
    <section className="section-adventure">
      <div className="row">
        {adventures.map((adventure, index) => (
          <div className="col-1-of-4" key={index}>
            <div className="adventure-card">
              <i
                className={`adventure-card__icon ${adventure.icon} margin-bottom-30px`}
              ></i>
              <h3 className="title-thrid margin-bottom-10px">
                {adventure.title}
              </h3>
              <p className="paragraph">{adventure.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdventureSection;
