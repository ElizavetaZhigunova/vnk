import React from "react";
import { HiOutlineHeart} from "react-icons/hi";
import "../../css/MainPage/Product.css";
import IMG from "../../assets/images/Image.png";

export const Product = () => (
    <div className="Product">
        <div className="IMG">
            <img src={IMG} alt="Product" />
            <div className="label-container">
                <div className="label best-price">лучшая цена</div>
                <div className="label installment">рассрочка</div>
            </div>
        </div>
        <div className="discription">
            <div className="discription-headers">
                <div className="discription-header">
                    <p>Универсальный трактор TFE-895</p>
                    <HiOutlineHeart className="discription-header-icon" />
                </div>
                <h5 className="cost">7 000 000 руб</h5>
            </div>
            <div className="discription-dawn">
                <p className="position">г. Краснодар, ул. Пушкина, 59</p>
                <p className="date">25 августа 2024</p>
            </div>
        </div>
    </div>
);


const MainBlock_Products = ({ numberOfProducts, advertisementPosition }) => {
    const productsArray = Array.from({ length: numberOfProducts }, (_, index) => index);
    return (
        <div className="products">
            {advertisementPosition === 'left' && <MainBlock_Advertisement />}
            {productsArray.map(index => (
                <Product key={index} />
            ))}
            {advertisementPosition === 'right' && <MainBlock_Advertisement />}
        </div>
    );
};


const MainBlock_Advertisement = () => {
    return (
        <div className="MainBlockAdvertisement">
            <p>Тут будет ваша реклама</p>
        </div>
    );
}

 
export function MainBlock2({ name, position }) {
    return (
        <div className="Main-mini">
            <h2 className="name">{name}</h2>  
            <div className="Main-mini-cont">
                {/* Логика без рекламы */}
                { !position && (
                    <>
                        <MainBlock_Products numberOfProducts={2} />
                        <MainBlock_Products numberOfProducts={2} />
                        <MainBlock_Products numberOfProducts={2} />
                        <MainBlock_Products numberOfProducts={2} />
                    </>
                )}

                {/* Логика с рекламой */}
                { (position === "left" || position === "right") && (
                    <>                     
                        <MainBlock_Products numberOfProducts={2} />
                        <MainBlock_Products numberOfProducts={2} />
                        <MainBlock_Products numberOfProducts={2} />
                        <MainBlock_Products numberOfProducts={2} />
                        <MainBlock_Products numberOfProducts={0} advertisementPosition="right" />
                    </>
                )}
            </div>
        </div>
    );
}
export function MainBlock4({ name, position }) {
    return (
        <div className="Main-mini">
            <h2 className="name">{name}</h2>  
            <div className="Main-mini-cont">
                {/* Логика без рекламы */}
                { !position && (
                    <>
                        <MainBlock_Products numberOfProducts={4} />
                        <MainBlock_Products numberOfProducts={4} />
                        <MainBlock_Products numberOfProducts={4} />
                    </>
                )}

                {/* Логика с рекламой слева */}
                { position === "left" && (
                    <>                     
                        <MainBlock_Products numberOfProducts={4} />
                        <MainBlock_Products numberOfProducts={4} />
                        <MainBlock_Products numberOfProducts={2} advertisementPosition="left" />
                    </>
                )}

                {/* Логика с рекламой справа */}
                { position === "right" && (
                    <>
                        <MainBlock_Products numberOfProducts={4} />
                        <MainBlock_Products numberOfProducts={2} advertisementPosition="right" />
                        <MainBlock_Products numberOfProducts={4} />
                    </>
                )}
            </div>
        </div>
    );
}

export function MainBlock6({ name, position }) {
    return (
        <div className="Main-mini">
            <h2 className="name">{name}</h2>  
            <div className="Main-mini-cont">
                {/* Логика без рекламы */}
                { !position && (
                    <>
                        <MainBlock_Products numberOfProducts={6} />
                        <MainBlock_Products numberOfProducts={6} />
                        <MainBlock_Products numberOfProducts={6} />
                    </>
                )}

                {/* Логика с рекламой слева */}
                { position === "left" && (
                    <>                     
                        <MainBlock_Products numberOfProducts={6} />
                        <MainBlock_Products numberOfProducts={6} />
                        <MainBlock_Products numberOfProducts={4} advertisementPosition="left" />
                    </>
                )}

                {/* Логика с рекламой справа */}
                { position === "right" && (
                    <>
                        <MainBlock_Products numberOfProducts={6} />
                        <MainBlock_Products numberOfProducts={4} advertisementPosition="right" />
                        <MainBlock_Products numberOfProducts={6} />
                    </>
                )}
            </div>
        </div>
    );
}
