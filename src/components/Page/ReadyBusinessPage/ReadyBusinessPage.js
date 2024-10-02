import React from "react";
import "../../../css/ReadyBusinessPage/ReadyBusinessPage.css";
import Bag from "../../../assets/images/ReadyBusiness/bag-banner.png";
import Franchise from "../../../assets/images/ReadyBusiness/franchise-banner.png";
import { Banner } from "./Banner";
import AdvSlider from "../MainPage/AdvSlider";
import { Recommendations } from "./Recommendations";

export default function ReadyBusinessPage() {
  return (
    <>
      <div className="readyBusinessPage">
        <Banner
          title="Готовый бизнес"
          image={Bag}
        />
        <Banner title="Франшиза" image={Franchise} franchise />
        <AdvSlider />
      </div>
      <Recommendations />
    </>
  );
}
