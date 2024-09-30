import React from 'react';
import "../../../css/MainPage/VidSlider.css";

export default function VidSlider() {
    return (
        <div className='VidCont'>
            <h2>Лучшие предложения</h2>
            <div className='VidSlider'>
                <div className='VidList'>
                    {/* Оригинальные элементы видео */}
                    {Array.from({ length: 10 }, (_, index) => (
                        <div className='Vid' key={index}>
                            <p>Видео {index + 1}</p>
                        </div>
                    ))}
                    {/* Дублирование элементов для эффекта бесконечности */}
                    {Array.from({ length: 10 }, (_, index) => (
                        <div className='Vid' key={index + 10}>
                            <p>Видео {index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
