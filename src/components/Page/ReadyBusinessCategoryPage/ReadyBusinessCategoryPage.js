import React, { useState } from "react";
import "../../../css/ReadyBusinessCategoryPage/ReadyBusinessCategoryPage.css";
import ImageAd from "../../../assets/images/ReadyBusinessCategory/image 74.png";
import ImageCompany from "../../../assets/images/ReadyBusinessCategory/image-company.png";
import { Header } from "./Header";
import { Filter } from "./Filter";
import { Select } from "./Select";
import { AdCard } from "./AdCard";

const ads = [
  {
    image: ImageAd,
    title: "Готовый бизнес на маркетплейсах",
    tags: ["в кредит"],
    price: "1 150 000",
    nds: true,
    description:
      "Hаше пpeдложeниe для производств и oфлайн мaгазинoв, дейcтвующих cеллepoв нa плoщaдкaх - WВ, ЯМ или OZON.",
    address: "Домодедово",
    createdAt: "21 августа 2024 г",
    company: {
      image: ImageCompany,
      title: "Best Seller",
      stars: 5,
      reviews: 12,
    },
  },
];

const ReadyBusinessCategoryPage = () => {
  const [visibleSortMenu, setVisibleSortMenu] = useState(false);
  const options = ["Опция 1", "Опция 2", "Опция 3"];

  return (
    <div className="ready-business-category-page">
      <Header />
      <div className="ready-business-category-content-container">
        <Filter count={205} title={"Готовый бизнес"} />
        <div className="ready-business-category-content">
          <div className="ready-business-category-content-sort">
            <div className="ready-business-category-content-sort-title">
              Сортировать по:
            </div>
            <Select options={options} />
          </div>
          <div className="ad-wrapper">
            {ads.map((item, index) => {
                console.log(item);
              return (
                <AdCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  tags={item.tags}
                  nds={item.nds}
                  price={item.price}
                  description={item.description}
                  address={item.address}
                  createdAt={item.createdAt}
                  company={item.company}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyBusinessCategoryPage;
