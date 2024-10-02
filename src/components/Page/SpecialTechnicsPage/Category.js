import React from 'react';
import "../../../css/Category/Category.css";
import Trucks from "../../../assets/images/SpecialTechnics/Trucks.png";
import Tractors from "../../../assets/images/SpecialTechnics/Tractors.png";
import Excavators from "../../../assets/images/SpecialTechnics/Excavators.png";
import Loaders from "../../../assets/images/SpecialTechnics/Loaders.png";
import Combines from "../../../assets/images/SpecialTechnics/Combines.png";
import Seeders from "../../../assets/images/SpecialTechnics/Seeders.png";
import Mowers from "../../../assets/images/SpecialTechnics/Mowers.png";

const Block = ({ text, img, bgColor }) => (
    <div className='Block' style={{ backgroundColor: bgColor }}>
        <h3>{text}</h3>
        {img && <img src={img}/>}
    </div>
)

export default function Category() {

    return (
        <div className='Category'>
            <Block text="Грузовики" img={Trucks} bgColor="#FFF7D4"/>
            <Block text="Трактора" img={Tractors} bgColor="#FAFAFA"/>
            <Block text="Экскаваторы" img={Excavators} bgColor="#DFF9CA"/>
            <Block text="Погрузчики" img={Loaders} bgColor="#EAEAEA"/>
            <Block text="Комбаины" img={Combines} bgColor="#DFF9CA"/>
            <Block text="Сеялки" img={Seeders} bgColor="#FFF7D4"/>
            <Block text="Косилки" img={Mowers} bgColor="#FAFFF6"/>
            <Block text="Все категории →" bgColor="#8DF04A"/>
        </div>
    );
}
