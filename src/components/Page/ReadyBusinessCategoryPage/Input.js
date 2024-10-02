import React from "react";
import '../../../css/ReadyBusinessCategoryPage/Input.css'

export const Input = ({ placeholder, value, onChange, className }) => {
  return (
    <div className={`rb-input-container ${className}`}>
      <input className="rb-input" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
