import React from "react";
import '../../../css/ReadyBusinessCategoryPage/Button.css'

export const Button = ({ title, onClick, className }) => {
  return (
    <div className={`ready-business-button ${className}`} onClick={onClick}>
      {title}
    </div>
  );
};
