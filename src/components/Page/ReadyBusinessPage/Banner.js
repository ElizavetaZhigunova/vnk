import React, { useEffect, useState } from "react";
import "../../../css/ReadyBusinessPage/Banner.css";
import { PopUp } from "./PopUp";
import { PopUpMobile } from "./PopUpMobile";

export const Banner = ({ title, image, franchise }) => {
  const [visibleCategories, setVisibleCategories] = useState(6);
  const [lastCategory, setLastCategory] = useState("Все категории →");
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateCategories = () => {
      const currentWidth = window.innerWidth;
      setScreenWidth(currentWidth);

      if (currentWidth < 768) {
        setLastCategory("Ещё");
      } else {
        setLastCategory("Все категории →");
      }

      if (currentWidth < 1160) {
        setVisibleCategories(3);
      } else if (currentWidth < 1312) {
        setVisibleCategories(4);
      } else {
        setVisibleCategories(6);
      }
    };

    updateCategories();
    window.addEventListener("resize", updateCategories);
    return () => {
      window.removeEventListener("resize", updateCategories);
    };
  }, []);

  const categories = [
    "Автобизнес",
    "Арендный бизнес",
    "Красота и здоровье",
    "Общественное питание",
    "Производство",
  ];

  const handleShowAllCategories = () => {
    setVisiblePopUp(!visiblePopUp);
  };

  return (
    <div className="readyBusinessPage-banner-container">
      <div className={`readyBusinessPage-banner ${franchise && "franchise"}`}>
        <span className="readyBusinessPage-banner-title">{title}</span>
        <div
          className={`readyBusinessPage-banner-image-container ${
            franchise && "franchise"
          }`}
        >
          <img
            className="readyBusinessPage-banner-image"
            src={image}
            alt="Портфель"
          />
        </div>
      </div>
      <div className="readyBusinessPage-category-container">
        {categories.slice(0, visibleCategories).map((category, index) => (
          <div
            key={`${category}-${index}`}
            className="readyBusinessPage-category-item"
            onClick={category === lastCategory ? handleShowAllCategories : null}
          >
            {category}
          </div>
        ))}
        <div
          className="readyBusinessPage-category-item"
          onClick={handleShowAllCategories}
        >
          {lastCategory}
        </div>
        {visiblePopUp &&
          (screenWidth < 1024 ? (
            <PopUpMobile
              title={title === "Готовый бизнес" ? "Готовый бизнес" : "Франшиза"}
              setVisiblePopUp={setVisiblePopUp}
            />
          ) : (
            <PopUp
              title={title === "Готовый бизнес" ? "Готовый бизнес" : "Франшиза"}
              setVisiblePopUp={setVisiblePopUp}
            />
          ))}
      </div>
    </div>
  );
};
