import React, { useEffect, useState } from "react";
import "../../../css/ReadyBusinessPage/Recommendations.css";
// import { Product } from "./Product";
import { Product } from "../MainProduct";

export const Recommendations = ({ adv, products, name }) => {
  const [visibleProducts, setVisibleProducts] = useState(products);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (adv) {
      const updateVisibleProducts = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 1023) {
          setVisibleProducts(products.slice(0, 8));
        } else if (screenWidth <= 1024) {
          setVisibleProducts(products.slice(0, 9));
        } else {
          setVisibleProducts(products.slice(0, 12));
        }
      };

      updateVisibleProducts();

      window.addEventListener("resize", updateVisibleProducts);

      return () => {
        window.removeEventListener("resize", updateVisibleProducts);
      };
    }
  }, [products, adv]);

  return (
    <div className="readyBusiness-recommendations">
      {name && (
        <div className="readyBusiness-recommendations-title">{name}</div>
      )}
      <div className="readyBusiness-recommendations-container">
        <div
          className={`readyBusiness-recommendations-left-side ${
            !adv ? "no-adv" : ""
          }`}
        >
          {visibleProducts.map((item, index) => {
            return (
              <Product
                key={`product-${index}`}
                image={item.image}
                description={item.description}
                cost={item.cost}
                position={item.position}
                date={item.date}
                flags={item.flags}
                adv={adv}
              />
            );
          })}
        </div>
        {adv && screenWidth > 766 && (
          <div className="readyBusiness-recommendations-right-side">
            Тут будет ваша реклама
          </div>
        )}
      </div>
    </div>
  );
};
