import React from "react";
import "../../../css/ReadyBusinessCategoryPage/Filter.css";
import { Button } from "./Button";
import { Input } from "./Input";

export const Filter = ({ count, title }) => {
  const categories = [
    "Автобизнес",
    "Арендный бизнес",
    "Красота и здоровье",
    "Общественное питание",
    "Производство",
    "Пункты выдачи заказов",
    "Сельское хозяйство",
    "Строительство",
    "Сфера развлечений",
    "Сфера услуг",
    "Торговля",
    "Туризм",
    "IT бизнес",
    "Другое",
  ];

  return (
    <div className="ready-business-category-content-filter">
      <div className="ready-business-category-content-filter-title">
        {title}
      </div>
      <div className="ready-business-category-content-filter-categories">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="ready-business-category-content-filter-categories-item"
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="ready-business-category-content-filter-container">
        <div className="ready-business-category-content-filter-price title">
          Цена, ₽
        </div>
        <div className="ready-business-category-content-filter-price-container">
          <Input className={"small"} placeholder={"от"} />
          <Input className={"small"} placeholder={"до"} />
        </div>
      </div>
      <div className="ready-business-category-content-filter-container">
        <div className="ready-business-category-content-filter-price title">
          Рейтинг продавца
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">4 звезды и выше</label>
        </div>
      </div>
      <div className="ready-business-category-content-filter-container">
        <div className="ready-business-category-content-filter-price title">
          Слова в описании
        </div>
        <Input placeholder={"Что-то важное для вас"} />
        <div className="checkbox-container words">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Искать только в названиях</label>
        </div>
      </div>
      <Button className={"ready"} title={`Показать ${count} объявлений`} />
    </div>
  );
};
