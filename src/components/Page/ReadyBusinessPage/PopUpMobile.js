import React from "react";
import "../../../css/ReadyBusinessPage/PopUpMobile.css";
import { IoClose } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

export const PopUpMobile = ({ title, setVisiblePopUp }) => {
  const handleClosePopUp = () => setVisiblePopUp(false);
  return (
    <div className="pop-up-container-mobile">
      <div className="pop-up-header-mobile">
        <p className="pop-up-title-mobile">{title}</p>
        <IoClose
          onClick={handleClosePopUp}
          className="pop-up-close-btn-mobile"
        />
      </div>
      <div className="pop-up-content-container-mobile">
        <div className="pop-up-content-category-item-mobile">
          <p>Автобизнес</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Арендный бизнес</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Красота и здоровье</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Общественное питание</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Производство</p>
        </div>

        <div className="pop-up-content-category-item-mobile">
          <p>Пункты выдачи заказов</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Сельское хозяйство</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Строительство</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Сфера развлечений</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Сфера услуг</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Торговля</p>
        </div>

        <div className="pop-up-content-category-item-mobile">
          <p>Туризм</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>IT бизнес</p>
        </div>
        <div className="pop-up-content-category-item-mobile">
          <p>Другое</p>
        </div>
      </div>
    </div>
  );
};
