import React, {useState, useEffect} from "react";
import { MdDifference, MdHandshake, MdBeenhere, MdDevices } from "react-icons/md";
import { TbTarget } from "react-icons/tb";
import { IoSchool } from "react-icons/io5";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import FranchiseHeader from "./Header"
import Section8 from "./Section8"
import Img from "../../../assets/images/Image32.png"
import Img2 from "../../../assets/images/Image756.png"
import Img21 from "../../../assets/images/Image755.png"
import Img3 from "../../../assets/images/Image726.png"
import "../../../css/Franchise/Franchise.css"
import "../../../css/Franchise/Section1.css"
import "../../../css/Franchise/Section2.css"
import "../../../css/Franchise/Section3.css"
import "../../../css/Franchise/Section4.css"
import "../../../css/Franchise/Section5.css"
import "../../../css/Franchise/Section6.css"
import "../../../css/Franchise/Section7.css"
import "../../../css/Franchise/Section8.css"

export default function Franchise() {
    function scrollLeft() {
        const cardsContainer = document.getElementById('cards');
        cardsContainer.scrollBy({
            left: -300, // Прокрутка на 300px влево
            behavior: 'smooth',
        });
    }
    
    function scrollRight() {
        const cardsContainer = document.getElementById('cards');
        cardsContainer.scrollBy({
            left: 300, // Прокрутка на 300px вправо
            behavior: 'smooth',
        });
    }

    const [image, setImage] = useState(Img2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 760) {
                setImage(Img21);
            } else {
                setImage(Img2);
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Cleanup event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className="Franchise">
            <FranchiseHeader/>

            <div className="Section1">
                <h2>Готовый бизнес, который вы запустите с нашей поддержкой</h2>
                <div className="cards-container">
                    <button className="arrow left" onClick={() => scrollLeft()}><TiChevronLeft/></button>
                    <div className="cards" id="cards">
                        <div className="card">
                            <p>Зарабатывайте от 4,8 млн. рублей в год</p>
                            <p className="number">01</p>
                        </div>
                        <div className="card">
                            <p>Юридическая и бухгалтерская поддержка</p>
                            <p className="number">02</p>
                        </div>
                        <div className="card">
                            <p>CRM-система</p>
                            <p className="number">03</p>
                        </div>
                        <div className="card">
                            <p>Техническая поддержка 24/7</p>
                            <p className="number">04</p>
                        </div>
                        <div className="card">
                            <p>Полная программа обучения</p>
                            <p className="number">05</p>
                        </div>
                        <div className="card">
                            <p>Личный наставник в области продаж</p>
                            <p className="number">06</p>
                        </div>
                        <div className="card">
                            <p>Скрипты продаж</p>
                            <p className="number">07</p>
                        </div>
                        <div className="card">
                            <p>Готовая база теплых клиентов от 1000 компаний</p>
                            <p className="number">08</p>
                        </div>
                    </div>
                    <button className="arrow right" onClick={() => scrollRight()}><TiChevronRight/></button>
                </div>
            </div>

            <div className="Section2">
                <img src={Img}/>
                <div className="discription">
                    <div className="Text-cont">
                        <p>ПРОСТО, БЫСТРО И УДОБНО</p>
                        <h2>Управляйте с помощью телефона или компьютера</h2>     
                    </div>
                    <p className="maintext">Все процессы автоматизированы, любой сотрудник может закрывать задачи находясь дома или за границей, что значительно экономит время и затраты на аренду офисов.</p>
                    <button>Получить презентацию</button>
                </div>
            </div>

            <div className="Section3">
                <h2>Наши преимущества</h2>
                <div className="cards">
                    <div className="block">
                        <MdDifference/>
                        <div className="text">
                            <h2>Вариативность</h2>
                            <p>Подписывая договор коммерческой концессии с нами вы заключаете договор со всеми заводами на вашей территории, а так же с соседними регионами. Что дает вам большую вариативность ценообразования</p>
                        </div>
                    </div>

                    <div className="block">
                        <MdHandshake />
                        <div className="text">
                            <h2>Партнерство</h2>
                            <p>Вы становитесь официальными дилерами ФосАгро и КуйбышевАзот. Получая таким образом торговое преимущество и специальные предложения от наших партнеров</p>
                        </div>
                    </div>

                    <div className="block">
                        <MdBeenhere />
                        <div className="text">
                            <h2>Стабильность</h2>
                            <p>Паушальный взнос так же является вашим обеспечением вы так же можете на него покупать продукты и заниматься их реализацией в случае не хватки средств или форс мажорных обстоятельств</p>
                        </div>
                    </div>

                    <div className="block">
                        <MdDevices />
                        <div className="text">
                            <h2>Собственное ПО</h2>
                            <p>Собственное программное обеспечение поможет вашим менеджерам подобрать оптимальный продукт с наилучшей ценной и добиться наилучшего результата</p>
                        </div>
                    </div>

                    <div className="block">
                        <TbTarget />
                        <div className="text">
                            <h2>Таргетинг</h2>
                            <p>Все клиенты которые будут вам переданы первоначально проработаны и являются потребителями топлива и удобрений</p>
                        </div>
                    </div>

                    <div className="block">
                        <IoSchool/>
                        <div className="text">
                            <h2>Обучение</h2>
                            <p>Подписывая договор коммерческой концессии с нами вы заключаете договор со всеми заводами на вашей территории, а так же с соседними регионами. Что дает вам большую вариативность ценообразования</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="Section4">
                <h2>Широкая линейка продуктов напрямую от производителей с конкурентными условиями</h2>
                <div className="cards">
                    <div className="cards-left">
                        <div className="card card1 card-left-top">
                            <h3>Дизельное топливо</h3>
                            <p>Жидкий продукт, использующийся как топливо в дизельном двигателе внутреннего сгорания.</p>
                        </div>
                        <div className="cards-left-buttom">
                            <div className="card card2 card-left-buttom">
                                <h3>Сжиженный газ</h3>
                                <p>Газ, который при некоторых условиях может превращаться в жидкость.</p>
                            </div>
                            <div className="card card3 card-left-buttom">
                                <h3>Бензин</h3>
                                <p>Горючая смесь лёгких углеводородов с температурой кипения от + 33 до +205 °C (в зависимости от примесей).</p>
                            </div>
                        </div>
                    </div>
                    <div className="cards-right">
                        <div className="card card4 card-right-left">
                            <h3>Масла</h3>
                            <p>Способствуют предохранению деталей от износа в результате трения между движущимися деталями.</p>
                        </div>
                        <div className="cards-right-right">
                            <div className="card card5 card-right-right">
                                <h3>Агрохимия</h3>
                                <p>Удобрения для питания растений и повышения плодородия почв.</p>
                            </div>
                            <div className="card card6 card-right-right dawn">
                                <h3>Мазут и битум</h3>
                                <p>Жидкий продукт, остающийся после переработки нефти.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="Section5">
                <div className="text">
                    <h2>Наша IT платформа</h2>
                    <p>предоставляет и дает возможность широкого выбора цен среди заводов производителей позволяющие достойно конкурировать на рынке</p>
                </div>
                <img src={image}/>
            </div>

            <div className="Section6">
                <h2>Финансовые показатели</h2>
                <div className="text-cont">
                    <div className="texts">
                        <div className="text">
                            <h3>Высокий потребительский спрос</h3>
                            <p>В России зарегистрировано 287500 с/х предприятий</p>
                        </div>
                        <div className="text">
                            <h3>Прямые договора</h3>
                            <p>Дизельное Топливо 25 заводов <br/>Бензин 23 завода <br/>Мазут 15 заводов <br/>Удобрения 24 завода <br/>Химхащита 6 заводов <br/>Масла 25 заводов</p>
                        </div>
                        <div className="text">
                            <h3>Средний чек от 1 500 000 руб</h3>
                            <p>Маржинальность от 3 до 14%</p>
                        </div>
                    </div>
                    <div className="img-cont">
                        <h3>Выручка за 2021 - 2023 год</h3>
                        <img src={Img3}/>
                    </div>
                </div>
                <h3 className="buttom">3 971 350 ₽ — средне годовая чистая прибыль региональных подразделений ООО "ВНК" по итогам 2022 года</h3>
            </div>

            <div className="Section7">
                <h2>5 шагов к успеху</h2>
                <div className="cards">
                    <div className="card">
                        <div className="header">
                            <h3>Догоаор</h3>
                            <h3>01</h3>
                        </div>
                        <p>С партнером подписывается договор. Каждая из сторон обязуется соблюдать условия</p>
                    </div>
                    <div className="card">
                        <div className="header">
                            <h3>Открытие</h3>
                            <h3>02</h3>
                        </div>
                        <p>Партнер формирует отдел продаж с поддержкой центрального подразделения и участвует в аттестации сотрудников. А также проводит переговоры с поставщиками.</p>
                    </div>
                    <div className="card">
                        <div className="header">
                            <h3>Инструктаж</h3>
                            <h3>03</h3>
                        </div>
                        <p>Партнеру проводится подробный инструктаж по всей система бизнеса. После чего передаются Методические пособия, организуется доступ к чату поддержки, системе обучения</p>
                    </div>
                    <div className="card">
                        <div className="header">
                            <h3>Продажи</h3>
                            <h3>04</h3>
                        </div>
                        <p>Партнер, при поддержке центрального подразделения, курирует переговоры отдела продаж. Курирует и контролирует, совместно с логистом центральной компании, каждую отгрузку продукции клиенту</p>
                    </div>
                    <div className="card">
                        <div className="header">
                            <h3>Прибыль</h3>
                            <h3>05</h3>
                        </div>
                        <p>Получайте прибыль и выходите в плюс</p>
                    </div>
                </div>
                <button>Получить звонок</button>
            </div>

            <Section8/>

        </div>
    );
}
