import React from 'react';
import "../../../css/Category/Category.css";
import Trucks from "../../../assets/images/SpecialTechnics/Trucks.png";
import Tractors from "../../../assets/images/SpecialTechnics/Tractors.png";
import Excavators from "../../../assets/images/SpecialTechnics/Excavators.png";
import Loaders from "../../../assets/images/SpecialTechnics/Loaders.png";
import Combines from "../../../assets/images/SpecialTechnics/Combines.png";
import Seeders from "../../../assets/images/SpecialTechnics/Seeders.png";
import Mowers from "../../../assets/images/SpecialTechnics/Mowers.png";

const Block = ({text, img}) => (
    <div className='Block'>
        <h3>{text}</h3>
        <img src={img}/>
    </div>
)

export default function Category() {

    return (
        <div className='Category'>
            <Block text = "Грузовики" img = {Trucks}/>
            <Block text = "Трактора" img = {Tractors}/>
            <Block text = "Экскаваторы" img = {Excavators}/>
            <Block text = "Погрузчики" img = {Loaders}/>
            <Block text = "Комбаины" img = {Combines}/>
            <Block text = "Сеялки" img = {Seeders}/>
            <Block text = "Косилки" img = {Mowers}/>
            <Block text = "Все категории →"/> 
        </div>
    );
}
