import React, { useState, useEffect } from 'react';
import BestFuel from "./BestFuel.js";
import { MainBlock2, MainBlock4, MainBlock6, Product } from "../MainProduct.js";
import { Advertisement } from "./Advertisement.js";
import VidSlider from "./VidSlider.js";
import AdvSlider from "./AdvSlider.js";
import "../../../css/MainPage/MainPage.css";

const MainBlock = ({ blockType, position, name }) => {
    switch (blockType) {
        case 'MainBlock2':
            return <MainBlock2 position={position} name={name} />;
        case 'MainBlock4':
            return <MainBlock4 position={position} name={name} />;
        default:
            return <MainBlock6 position={position} name={name} />;
    }
};

export default function MainPage() {
    const [blocks, setBlocks] = useState([]);
    const [blockType, setBlockType] = useState('MainBlock6');

    const updateBlockType = () => {
        if (window.innerWidth < 760) {
            setBlockType('MainBlock2');
        } else if (window.innerWidth < 1024) {
            setBlockType('MainBlock4');
        } else {
            setBlockType('MainBlock6');
        }
    };

    useEffect(() => {
        updateBlockType(); // Initial check

        // Set initial blocks based on the current blockType
        setBlocks([
            <MainBlock key={0} blockType={blockType} position="left" name="Рекомендуемое для вас" />,
            <Advertisement key={1} />,
            <MainBlock key={2} blockType={blockType} position="right" name="Рекомендуемое для вас" />,
            <BestFuel key={3} />,
            <div className="AdvertisementBetwens" key={4}>
                <div className="AdvertisementBetwen Advertisement">
                    <div className="content">
                        <h2>Место для вашей рекламы</h2>
                    </div>
                    <div className="teg">
                        <h8>Реклама</h8>
                    </div>
                </div>
                <div className="AdvertisementBetwen Advertisement">
                    <div className="content">
                        <h2>Место для вашей рекламы</h2>
                    </div>
                    <div className="teg">
                        <h8>Реклама</h8>
                    </div>
                </div>
            </div>,
            <MainBlock key={5} blockType={blockType} position="" name="Другие объявления" />, // передайте пустую позицию
        ]);

        // Add event listener for window resize
        window.addEventListener('resize', updateBlockType);

        return () => {
            window.removeEventListener('resize', updateBlockType);
        };
    }, []);

    useEffect(() => {
        // Обновление блоков при изменении blockType
        setBlocks(prevBlocks => prevBlocks.map((block, index) => {
            if (index === 0) {
                return <MainBlock key={index} blockType={blockType} position="left" name="Рекомендуемое для вас" />;
            } else if (index === 2) {
                return <MainBlock key={index} blockType={blockType} position="right" name="Рекомендуемое для вас" />;
            } else if (index === 5) {
                return <MainBlock key={index} blockType={blockType} position="" name="Другие объявления" />;
            }
            return block;
        }));
    }, [blockType]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            // Добавление 20 компонентов Product
            for (let i = 0; i < 24; i++) {
                setBlocks(prevBlocks => [
                    ...prevBlocks,
                    <Product key={prevBlocks.length + i} />
                ]);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [blocks]);

    return (
        <div className='MainPage'>
            <AdvSlider />
            <VidSlider />
            {blocks}
        </div>
    );
}
