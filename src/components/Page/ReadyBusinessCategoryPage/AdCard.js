import React from "react";
import { Button } from "./Button";
import "../../../css/ReadyBusinessCategoryPage/AdCard.css";
import StarRating from "./StarRating";
import { HiOutlineHeart } from "react-icons/hi";

export const AdCard = ({
  image,
  title,
  tags,
  nds,
  price,
  description,
  address,
  createdAt,
  company,
}) => {
  const getReviewWord = (reviewCount) => {
    const lastDigit = reviewCount % 10;
    const lastTwoDigits = reviewCount % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return `${reviewCount} отзывов`; // Исключения для 11-14
    }

    if (lastDigit === 1) {
      return `${reviewCount} отзыв`; // Окончание для 1
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${reviewCount} отзыва`; // Окончание для 2, 3, 4
    }

    return `${reviewCount} отзывов`; // Окончание для 5, 6, 7, 8, 9, 0
  };
  return (
    <div className="ad-card">
      <div className="ad-card-img-container">
        <img src={image} alt="ad-image" />
      </div>
      <div className="ad-card-info-container">
        <div className="ad-card-info-title-container">
          <div className="ad-card-info-title">{title}</div>
          <HiOutlineHeart size={30} className="ad-card-info-icon" />
          {/* <div className="ad-card-info">like</div> */}
        </div>

        <div className="ad-card-info-tags-container">
          {tags?.map((item, index) => (
            <div className="ad-card-info-tag" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="ad-card-info-price">
          {price} {nds ? "с НДС" : "без НДС"}
        </div>
        <div className="ad-card-info-desc">{description}</div>
        <div className="ad-card-info-location-created">
          <div className="ad-card-info-address">{address}</div>
          <div className="ad-card-info-created">Опубликовано {createdAt}</div>
        </div>
      </div>
      <div className="ad-card-company-info-container">
        <div className="ad-card-company-info-wrapper">
          <div className="ad-card-company-info-img-container">
            <img
              className="ad-card-company-info-img"
              src={company.image}
              alt=""
            />
          </div>
          <div className="ad-card-company-info-title">{company.title}</div>
          {/* <div className="ad-card-company-info-"> */}
          <StarRating rating={company.stars} />
          {/* </div> */}
          <div className="ad-card-company-info-reviews-container">
            {getReviewWord(company.reviews)}
          </div>
        </div>
        <div className="ad-card-company-info-btn-container">
          <Button className={"ad-card-btn call"} title={"Позвонить"} />
          <Button className={"ad-card-btn write"} title={"Написать"}/>
        </div>
      </div>
    </div>
  );
};
