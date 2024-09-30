import React, { useState, useEffect, useRef } from "react";
import "../../../css/Franchise/Header.css";

export default function FranchiseHeader() {
    const videos = [
        "https://www.youtube.com/embed/U8_nPqF0-DA",
        "https://www.youtube.com/embed/ghShviLQTdI",
        "https://www.youtube.com/embed/i6lKBKijBYs"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRefs = useRef([]);

    // Функция для переключения видео
    const goToNextVideo = () => {
        if (!isPlaying) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }
    };

    // Запускаем интервал листания видео
    useEffect(() => {
        const interval = setInterval(goToNextVideo, 5000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    // Функция для обработки нажатий на кнопки слайдера
    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    // Обработчики событий YouTube API
    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
        } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
            setIsPlaying(false);
        }
    };

    // Инициализация YouTube API и создание плееров
    useEffect(() => {
        if (window.YT) {
            playerRefs.current.forEach((player, index) => {
                player = new window.YT.Player(`video-${index}`, {
                    events: {
                        onStateChange: onPlayerStateChange
                    }
                });
            });
        } else {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                playerRefs.current.forEach((player, index) => {
                    player = new window.YT.Player(`video-${index}`, {
                        events: {
                            onStateChange: onPlayerStateChange
                        }
                    });
                });
            };
        }
    }, []);

    return (
        <div className="top">
            <div className="Text-block">
                <div className="Text-cont">
                    <h2>Начните свой прибыльный бизнес в нефтяной отрасли без офиса и переплат</h2>
                    <div className="discription">
                        <p>Зарабатывайте от 330 000₽ в месяц дистанционно</p>
                        <p>Без фиксированного роялти. Партнер платит процент от продаж.</p>
                    </div>
                </div>
                <button>Хочу получить информацию</button>
            </div>
            <div className="Video-slider">
                <div className="button-container">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            className={`slider-button ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleButtonClick(index)}
                        />
                    ))}
                </div>
                <div
                    className="Video-slider-inner"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {videos.map((video, index) => (
                        <iframe
                            key={index}
                            id={`video-${index}`}
                            src={`${video}?enablejsapi=1`} // enablejsapi для управления видео
                            title={`Franchise video ${index + 1}`}
                            className="video-frame"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ref={(el) => (playerRefs.current[index] = el)} // Сохраняем рефы
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
