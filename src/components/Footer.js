import React from 'react';
import '../css/Footer.css';
import Logo1 from "../assets/images/Footer/App Store 英文 黑色.png"
import Logo2 from "../assets/images/Footer/AppGallery 英文 黑色.png"
import Logo3 from "../assets/images/Footer/Galaxy Store 英文 黑色.png"
import Logo4 from "../assets/images/Footer/Google Play 英文 黑色.png"

import Message1 from "../assets/images/Footer/ok.png"
import Message2 from "../assets/images/Footer/telegram.png"
import Message3 from "../assets/images/Footer/vk.png"
import Message4 from "../assets/images/Footer/whatsapp.png"
import Message5 from "../assets/images/Footer/yandex_zen.png"

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-cont">
                <div className="Footer-cont-top">
                    <div className='text'>
                        <h4>Покупателям</h4>
                        <div>
                            <p>Доставка</p>
                            <p>Каталог</p>
                            <p>Узнать о франизе </p>
                            <p>Инвестиции</p>
                            <p>Заказать продукцию</p>
                        </div>
                    </div>
                    <div className='text'>
                        <h4>О компании</h4>
                        <div>
                            <p>Политика конфиденциальности</p>
                            <p>Персональные данные</p>
                            <p>Новости</p>
                        </div>
                    </div>
                    <div className='text'>
                        <h4>Контакты</h4>
                        <div>
                            <p>Приволжский федеральный округ, Республика Башкортостан, городской округ Уфа, улица Минигали Губайдуллина, 2, корп. 1</p>
                            <p>infovnk@yandex.ru</p>
                            <p>8-999-999-00-00</p>
                        </div>
                    </div>
                    <div className='text'>
                        <div>
                            <p><br/><br/></p>
                            <p>Контакты</p>
                            <p>Реквизиты</p>
                            <p>Разместить рекламу </p>
                        </div>
                    </div>
                </div>
                <div className="Footer-cont-bottom">
                    {/* <div className="Left">
                        <img src={Logo4}/>
                        <img src={Logo1}/>
                        <img src={Logo2}/>
                        <img src={Logo3}  />
                    </div> */}
                    <div className="Right">
                        <img src={Message1}/>
                        <img src={Message2}/>
                        <img src={Message3}/>
                        <img src={Message4}/>
                        <img src={Message5}/>
                    </div>
                </div>
            </div>
            <div className="Footer-bottom">
                <p>© ВНК</p>
                <p>2024</p>
            </div>
        </div>
    );
}
