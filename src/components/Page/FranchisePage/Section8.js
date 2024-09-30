import React from "react";
import Photo1 from "../../../assets/images/Collaboration/Photo1.png"
import Photo2 from "../../../assets/images/Collaboration/Photo2.png"
import Photo3 from "../../../assets/images/Collaboration/Photo3.png"
import Col1 from "../../../assets/images/Collaboration/Col1.png"
import Col2 from "../../../assets/images/Collaboration/Col2.png"
import Col3 from "../../../assets/images/Collaboration/Col3.png"
import Col4 from "../../../assets/images/Collaboration/Col4.png"
import Col5 from "../../../assets/images/Collaboration/Col5.png"
import Col6 from "../../../assets/images/Collaboration/Col6.png"
import "../../../css/Franchise/Section8.css"

export default function Section8() {
    
    return (
        <div className="Section8">
            <h2>Наши партнеры</h2>
            <div className="img-cont">
                <img src={Photo1}/>
                <img src={Photo2}/>
                <img src={Photo3}/>
            </div>
            <div className="coll-cont">
                <div className="logo-carousel">
                    <div className="logo-track">
                        <img src={Col1}/>
                        <img src={Col2}/>
                        <img src={Col3}/>
                        <img src={Col4}/>
                        <img src={Col5}/>
                        <img src={Col6}/>

                        <img src={Col1}/>
                        <img src={Col2}/>
                        <img src={Col3}/>
                        <img src={Col4}/>
                        <img src={Col5}/>
                        <img src={Col6}/>

                        <img src={Col1}/>
                        <img src={Col2}/>
                        <img src={Col3}/>
                        <img src={Col4}/>
                        <img src={Col5}/>
                        <img src={Col6}/>
                    </div>
                </div>
                {/* <div className="logo-official">
                    <h3>Официальные дилеры ФосАгро</h3>
                    <img src={Logo}/>
                </div> */}
            </div>
        </div>
    );
}
