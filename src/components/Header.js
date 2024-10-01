import React, { useState, useEffect } from "react";
import {
  HiOutlineLocationMarker,
  HiMenuAlt2,
  HiSearch,
  HiOutlineHeart,
} from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  MdOutlineLocalGasStation,
  MdMailOutline,
  MdOutlineAddToPhotos,
  MdOutlineAgriculture,
  MdOutlineAssuredWorkload,
  MdApartment,
  MdOutlineDesignServices,
  MdFavoriteBorder,
} from "react-icons/md";
import { FaFlask } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import advertisement from "../assets/images/HedAdv/advertisement.png";
import advertisement1 from "../assets/images/HedAdv/advertisement (1).png";
import advertisement2 from "../assets/images/HedAdv/advertisement (2).png";

import img1 from "../assets/images/Icons/Icon_1.png";
import img2 from "../assets/images/Icons/Icon_2.png";
import img3 from "../assets/images/Icons/Icon_3.png";
import img4 from "../assets/images/Icons/Icon_4.png";
import img5 from "../assets/images/Icons/Icon_5.png";

import "../css/Header.css";
import "../css/HeaderAdv.css";

import Logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

const Category = () => {
    const navigate = useNavigate()
    const handleGoToPage = (page) => {
        navigate(`/${page}`);
      };
  return (
    <div className="category-cont">
      <div className="category-line">
        <div className="category">
          <MdOutlineLocalGasStation />
          <p>Нефтепродукты</p>
        </div>
        <div className="category">
          <FaFlask />
          <p>Агрохимия</p>
        </div>
        <div
          className="category"
          onClick={() => handleGoToPage("special-technics")}
        >
          <MdOutlineAgriculture />
          <p>Спец. техника</p>
        </div>
        <div className="category">
          <GrMoney />
          <p>Реализация урожая</p>
        </div>
        <div className="category" onClick={() => handleGoToPage("ready-business")}>
          <MdOutlineAssuredWorkload />
          <p>Готовый бизнес</p>
        </div>
        <div className="category">
          <MdApartment />
          <p>Недвижимость</p>
        </div>
        <div className="category">
          <MdOutlineDesignServices />
          <p>Услуги</p>
        </div>
      </div>
    </div>
  );
};

export default function Header({ SwapPage }) {
  const navigate = useNavigate();

  const [placeholder, setPlaceholder] = useState("");
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 760);
  const [headerAdvImage, setHeaderAdvImage] = useState(advertisement);
  const [isAdvVisible, setIsAdvVisible] = useState(window.innerWidth >= 1024); // Видимость рекламы
  const [scrollPosition, setScrollPosition] = useState(0); // Текущая позиция прокрутки

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsWideScreen(width > 1024);
      setIsSmallScreen(width < 760);
      setPlaceholder(
        width > 1224 ? "Оптовые поставки нефти продуктов и удобрений" : "Найти"
      );
      setIsAdvVisible(width >= 1024 && scrollPosition === 0); // Видимость рекламы зависит от ширины и позиции прокрутки

      // Логика для смены изображений
      if (width > 1600) {
        setHeaderAdvImage(advertisement);
      } else if (width > 1300) {
        setHeaderAdvImage(advertisement1);
      } else {
        setHeaderAdvImage(advertisement2);
      }
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollPosition(currentScrollPos);

      // Скрываем рекламу, если прокрутили больше 64px, и показываем, если вернулись на самый верх
      if (currentScrollPos > 100) {
        setIsAdvVisible(false);
      } else if (currentScrollPos <= 100) {
        setIsAdvVisible(window.innerWidth >= 1024);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Отрисовка другого хедера, если ширина экрана меньше 730 пикселей
  if (isSmallScreen) {
    return (
      <>
        <div className="Header-small">
          <div className="Header-small-top">
            <button className="menu-button">
              <HiMenuAlt2 />
              {isWideScreen && " Каталог"}
            </button>
            <img
              src={Logo}
              alt="Logo"
              className="logo-small"
              onClick={() => SwapPage("MainPage")}
            />
            <div
              className="Icons-container"
              onClick={() => SwapPage("FranchisePage")}
            >
              <HiOutlineLocationMarker />
            </div>
          </div>
          <div className="Header-small-search">
            <input
              className="search-input"
              type="text"
              placeholder={placeholder}
            />
            <button className="search-button">
              <HiSearch />
            </button>
          </div>
          <Category SwapPage={SwapPage} />
        </div>

        {/* Добавляем фиксированную панель внизу экрана для малых экранов */}
        <div className="BottomPanel">
          <div className="panel-icon panel-icon-green">
            <img src={img2} />
            <p>Поиск</p>
          </div>
          <div className="panel-icon">
            <img src={img3} />
            <p>Избранное</p>
          </div>
          <div className="panel-icon">
            <img src={img4} />
            <p>Объявления</p>
          </div>
          <div className="panel-icon">
            <img src={img1} />
            <p>Сообщения</p>
          </div>
          <div className="panel-icon">
            <img src={img5} />
            <p>Войти</p>
          </div>
        </div>
      </>
    );
  }

  const handleGoToPage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <>
      <div className="HeaderCont">
        {isAdvVisible && ( // Условие для отображения рекламного блока
          <div className="HedAdv">
            <img src={headerAdvImage} alt="Advertisement" />
          </div>
        )}
        <div className="Header">
          {isWideScreen && isAdvVisible && (
            <div className="Header-container-up">
              <div className="IconLink">
                <HiOutlineLocationMarker className="Marker" />
                <select id="options" name="options">
                  <option value="option1">Кемерово</option>
                  <option value="option2">Вариант 2</option>
                  <option value="option3">Вариант 3</option>
                </select>
              </div>
              <div className="SecondLink">
                <p onClick={() => handleGoToPage("franchise")}>Франшиза</p>
                <p>Инвестиции</p>
                <p>Мобильное приложение</p>
                <button>Разместить объявление</button>
              </div>
            </div>
          )}

          <div className="Header-container-dawn">
            <div className="Logo">
              <img src={Logo} alt="Logo" onClick={() => handleGoToPage("")} />
              <button>
                <HiMenuAlt2 />
                {isWideScreen && " Каталог"}
              </button>
            </div>
            <div className="search">
              <input
                className="search-input"
                type="text"
                placeholder={placeholder}
              />
              <button className="search-button">
                <HiSearch />
              </button>
            </div>
            <div className="Icons">
              {isWideScreen && (
                <div className="Icons-container">
                  <HiOutlineHeart />
                  Избранное
                </div>
              )}
              <div
                className="Icons-container"
                onClick={() => handleGoToPage("franchise")}
              >
                <BsPerson />
                Войти
              </div>
              {isWideScreen && (
                <div className="Icons-container">
                  <AiOutlineShoppingCart />
                  Корзина
                </div>
              )}
            </div>
          </div>

          <Category SwapPage={SwapPage} />
        </div>
      </div>
    </>
  );
}
