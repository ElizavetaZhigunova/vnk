import React, { useEffect, useState } from "react";
import "../../../css/ReadyBusinessPage/ReadyBusinessPage.css";
import Bag from "../../../assets/images/ReadyBusiness/bag-banner.png";
import Franchise from "../../../assets/images/ReadyBusiness/franchise-banner.png";
import { Banner } from "./Banner";
import AdvSlider from "../MainPage/AdvSlider";
import { Recommendations } from "./Recommendations";
import IMG from "../../../assets/images/Image.png";

const products = [
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
  {
    image: IMG,
    description: "Универсальный трактор TFE-895",
    cost: "7 000 000",
    position: "г. Краснодар, ул. Пушкина, 59",
    date: "25 августа 2024",
    flags: ["Рассрочка", "В кредит"],
  },
];

export default function ReadyBusinessPage() {
  const [blocks, setBlocks] = useState([
    <Banner title="Готовый бизнес" image={Bag} />,
    <Banner title="Франшиза" image={Franchise} franchise />,
    <AdvSlider />,
    <Recommendations adv name={"Рекомендации для вас"} products={products} />,
  ]);


  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 600
      ) {
        // Если пользователь доскроллил до низа страницы
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          <Recommendations adv={false} products={products} />,
        ]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Убираем обработчик при размонтировании
    };
  }, []);

  return <div className="readyBusinessPage">{blocks}</div>;
}
