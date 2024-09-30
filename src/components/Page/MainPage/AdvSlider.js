import React, { useState, useEffect } from 'react';
import "../../../css/MainPage/AdvSlider.css"

export default function AdvSlider() {
    const textBlocks = [
        "Место для вашей рекламы 1", 
        "Место для вашей рекламы 2", 
        "Место для вашей рекламы 3", 
        "Место для вашей рекламы 4", 
        "Место для вашей рекламы 5", 
        "Место для вашей рекламы 6"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextTextBlock = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textBlocks.length);
    };

    useEffect(() => {
        const interval = setInterval(goToNextTextBlock, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="AdvSlider">
            <div className="TextSlider">
                <div className="ButtonContainer">
                    {textBlocks.map((_, index) => (
                        <button
                            key={index}
                            className={`SliderButton ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleButtonClick(index)}
                        />
                    ))}
                </div>
                <div
                    className="TexSliderInner"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {textBlocks.map((text, index) => (
                        <div key={index} className="TextBlock">
                            {text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="AdvLabel">Реклама</div> {/* Блок с надписью "Реклама" */}
        </div>
    );    
}