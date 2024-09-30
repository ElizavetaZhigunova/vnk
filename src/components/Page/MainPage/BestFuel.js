import React, { useState, useEffect } from "react";
import { Advertisement } from "./Advertisement"
import { HiOutlinePlus, HiOutlineDocumentText } from "react-icons/hi";
import IMGFuel from "../../../assets/images/image 61.png";
import "../../../css/MainPage/BestFuelCont.css";

export const BestFuel = () => (
    <div className="Section">
        <div className="Header-texts">
            <div className="Header-text">
                <p>Дизельное топливо</p>
                <h4>Евро 5 (К5)</h4>
            </div>
            <div className="Header-icon">
                <img src={IMGFuel} alt="Best Fuel" />
                <h8>Танеко</h8>
            </div>
        </div>
        <line />
        <div className="line1 line">
            <p>Доставка</p>
            <h2>Самовывоз, автовоз</h2>
        </div>
        <div className="line2 line">
            <p>Сертификат</p>
            <HiOutlineDocumentText className="icon" />
        </div>
        <div className="line3 line">
            <p>Плотность</p>
            <h2>0.837</h2>
        </div>
        <div className="line4 line">
            <p>Цена за тонну</p>
            <div className="cost">
                <h2>55.000 ₽</h2>
                <p>-2500 ▾</p>
            </div>
        </div>
        <div className="line5 line">
            <p>Цена за литр</p>
            <div className="cost">
                <h2>41.65 ₽</h2>
                <p className="costDawn">+2.15 ▴ </p>
            </div>
        </div>
        <line />
        <div className="line6 line">
            <h2>55.000 ₽</h2>
            <button className="cost">
                <HiOutlinePlus />
                <h5 className="buy">Купить</h5>
            </button>
        </div>
    </div>
);

export default function BestFuelCont() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [fuelCount, setFuelCount] = useState(8); 

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (window.innerWidth < 1486) {
                setFuelCount(6); 
            } else {
                setFuelCount(8); 
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const fuelItems = Array(fuelCount).fill(<BestFuel />);

    return (
        <div className="BestFuelCont">
            <div className="HeaderFuel">
                <h2>Лучшее топливо</h2>
                <p>ПОКАЗАТЬ ВСЕ →</p>
            </div>
            <div className="Buttons">
                <button>Дизельное топливо</button>
                <button>Удобрения</button>
                <button>Бензин</button>
                <button>Средства защиты</button>
                <button>Газ</button>
                <button>Масло</button>
                <button>Мазут</button>
            </div>
            <div className="FuelCont">
                {fuelItems}
            </div>  
        </div>
    );
}
