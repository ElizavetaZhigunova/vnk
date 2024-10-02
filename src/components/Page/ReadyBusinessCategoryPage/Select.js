import React, { useState, useRef, useEffect } from "react";
import "../../../css/ReadyBusinessCategoryPage/Select.css"; // Стилизация кастомного селекта

export const Select = ({ options, placeholder = "Выберите опцию" }) => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия выпадающего списка
    const [selectedOption, setSelectedOption] = useState(null); // Состояние для хранения выбранной опции
    const selectRef = useRef(null); // Для отслеживания кликов вне компонента
  
    // Обработчик для открытия/закрытия списка
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    // Обработчик для выбора элемента
    const handleOptionClick = (option) => {
      setSelectedOption(option); // Установка выбранной опции
      setIsOpen(false); // Закрытие выпадающего списка после выбора
    };
  
    // Закрытие списка при клике вне компонента
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    return (
      <div className="custom-select" ref={selectRef}>
        <div className="custom-select-header" onClick={toggleDropdown}>
          {selectedOption || placeholder}
          <span className={`arrow ${isOpen ? "open" : ""}`}></span>
        </div>
        {isOpen && (
          <ul className="custom-select-dropdown">
            {options.map((option, index) => (
              <li
                key={index}
                className="custom-select-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
