import React from "react";
import "../../../css/ReadyBusinessPage/PopUp.css";
import { IoClose } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

export const PopUp = ({ title, setVisiblePopUp }) => {
  const handleClosePopUp = () => setVisiblePopUp(false);
  return (
    <div className="pop-up-container">
      <div className="pop-up-header">
        <p className="pop-up-title">{title}</p>
        <IoClose onClick={handleClosePopUp} className="pop-up-close-btn" />
      </div>
      <div className="pop-up-content-container">
        <div className="pop-up-content-category-container">
          <div className="pop-up-content-category-item">
            <p>Автобизнес</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Арендный бизнес</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Красота и здоровье</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Общественное питание</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Производство</p>
            <IoChevronForwardOutline />
          </div>
        </div>
        <div className="pop-up-content-category-container">
          <div className="pop-up-content-category-item">
            <p>Пункты выдачи заказов</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Сельское хозяйство</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Строительство</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Сфера развлечений</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Торговля</p>
            <IoChevronForwardOutline />
          </div>
        </div>
        <div className="pop-up-content-category-container">
          <div className="pop-up-content-category-item">
            <p>Туризм</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>IT бизнес</p>
            <IoChevronForwardOutline />
          </div>
          <div className="pop-up-content-category-item">
            <p>Другое</p>
            <IoChevronForwardOutline />
          </div>
        </div>
      </div>
    </div>
  );
};
