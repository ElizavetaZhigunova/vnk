import React from "react";
import "../../../css/ReadyBusinessCategoryPage/Header.css";
import { useLocation, useNavigate } from "react-router-dom";

const translations = {
  "ready-business": "Готовый бизнес",
  "ready-business-main": "Готовый бизнес",
};

const translatePathname = (value) => {
  // Если есть перевод, возвращаем его, иначе оставляем оригинальное название
  return translations[value] || value;
};

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleNavigate = (to) => {
    navigate(to);
  };
  return (
    <div className="ready-business-category-title-container">
      <div className="ready-business-category-path">
        <div className="ready-business-category-path-item">
          <div
            className="ready-business-category-path-item-hovered"
            onClick={() => handleNavigate("/")}
          >
            Главная
          </div>
          <div className="chevron">›</div>
        </div>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <>
              {index === pathnames.length - 1 ? (
                <div className="ready-business-category-path-item">
                  <div>{translatePathname(decodeURIComponent(value))}</div>
                </div> // Текущая страница не должна быть ссылкой
              ) : (
                <div className="ready-business-category-path-item">
                  <div
                    className="ready-business-category-path-item-hovered"
                    onClick={() => handleNavigate(to)}
                  >
                    {translatePathname(decodeURIComponent(value))}
                  </div>
                  <div className="chevron">›</div>
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className="ready-business-category-title">Готовый бизнес</div>
    </div>
  );
};
