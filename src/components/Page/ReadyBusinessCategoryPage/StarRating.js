import React from "react";
import "../../../css/ReadyBusinessCategoryPage/StarRating.css"; // Подключаем CSS стили для звезд

const Star = ({ filled, half }) => (
  <span className="star">
    <span
      className={`star-inner ${filled ? "filled" : ""} ${half ? "half" : ""}`}
    >
      ★
    </span>
  </span>
);

const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Количество полных звезд
  const hasHalfStar = rating % 1 !== 0; // Есть ли половинная звезда

  for (let i = 1; i <= maxRating; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} filled={true} />); // Полные звезды
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<Star key={i} half={true} />); // Половинная звезда
    } else {
      stars.push(<Star key={i} filled={false} />); // Пустые звезды
    }
  }

  return (
    <div className="rating-container">
      <div
        className="star-count"
        style={{ marginRight: "10px", fontSize: "24px" }}
      >
        {rating.toFixed(1)}
      </div>
      <div className="stars-container">{stars}</div>
    </div>
  );
};

export default StarRating;
