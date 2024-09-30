import React, { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import "../../../css/ReadyBusinessPage/Product.css";

export const Product = ({ image, description, cost, position, date, adv }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [flags, setFlags] = useState([]);
  // Обработчик изменения ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Очистка слушателя при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // Логика для установки флагов в зависимости от ширины экрана
  useEffect(() => {
    if (windowWidth >= 1440) {
      setFlags(["лучшая цена", "рассрочка"]);
    } else if (windowWidth >= 1024) {
      setFlags(["лучшая цена", "+3"]);
    } else if (windowWidth >= 768) {
      setFlags(["хит сезона", "рассрочка"]);
    } else {
      setFlags(["в кредит", "+3"]);
    }
  }, [windowWidth]);

  const flagStyles = {
    "лучшая цена": "cost-flag",
    "рассрочка": "installment-flag",
    "хит сезона": "hit-season-flag",
    "в кредит": "credit-flag",
    "распродажа": "sale-flag",
    "+3": "plus-three-flag",
  };
  return (
    <div className={`product-rb ${!adv ? "no-adv" : ""}`}>
      <div className="IMG-rb">
        <img src={image} alt="Product" />
        <div className="flags-container">
          {flags?.map((flag, index) => (
            <div key={`flag-${index}`} className={`flag ${flagStyles[flag]}`}>
              {flag}
            </div>
          ))}
        </div>
      </div>
      <div className="description-rb">
        <div className="description-headers-rb">
          <div className="description-header-rb">
            <p>{description}</p>
            <HiOutlineHeart className="description-header-icon-rb" />
          </div>
          <h5 className="cost-rb">{cost} руб</h5>
        </div>
        <div className="description-dawn-rb">
          <p className="position-rb">{position}</p>
          <p className="date-rb">{date}</p>
        </div>
      </div>
    </div>
  );
};
