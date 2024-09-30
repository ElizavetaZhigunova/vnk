import React, { useEffect, useState } from "react";
import { MainBlock2, MainBlock4, MainBlock6, Product } from "../MainProduct.js";
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

export const Recommendations = () => {
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
            <MainBlock key={0} blockType={blockType} position="right" name="Рекомендуемое для вас" />,
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
                 return <MainBlock key={index} blockType={blockType} position="right" name="Рекомендуемое для вас" />;
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
            {blocks}
        </div>
    );
};
