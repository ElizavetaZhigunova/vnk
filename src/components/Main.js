import React from "react";
import MainPage from "./Page/MainPage/MainPage.js";
import FranchisePage from "./Page/FranchisePage/FranchisePage.js";
import ReadyBusinessPage from "./Page/ReadyBusinessPage/ReadyBusinessPage.js"; 
import SpecialTechnicsPage from "./Page/SpecialTechnicsPage/SpecialTechnicsPage.js"; 
import "../css/Main.css";

export default function Main({Page}) {
    var ThisPage = null; 
    switch (Page) {
        case "MainPage":
            ThisPage = <MainPage/>;
            break;
        case "FranchisePage":
            ThisPage = <FranchisePage/>;
            break;
        case "ReadyBusinessPage": 
            ThisPage = <ReadyBusinessPage />; 
            break;
        case "SpecialTechnicsPage": 
            ThisPage = <SpecialTechnicsPage />; 
            break;
        default:
            ThisPage = <div>Page not found</div>;
    }
    return (
        <div className="Main">
            {ThisPage}
        </div>
    );
}
