import React, { useState } from "react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swipergame.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
function SwiperGames({ game }) {
  const [active, setActive] = useState(false);

  const handleToggleVideo = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      style={{
        "--swiper-navigation-color": "#ffffff",
      }}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {game.map((games) => {
        return (
          <SwiperSlide key={games._id}>
            <div className="gameSlider">
              <img src={games.img} alt="Game" />
              <div className={`video ${active ? "active" : ""}`}>
                <iframe
                  src={games.trailer}
                  width="1200"
                  height="720"
                  title={games.title}
                  allow="accelerometer; clipboard-write; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="content">
                <h2>{games.title}</h2>
                <p>{games.description}</p>
                <div className="buttons">
                  <a href="/" className="orderBtn">
                    Order Now
                  </a>
                  <a
                    href="/"
                    className={`playBtn ${active ? "active" : ""}`}
                    onClick={handleToggleVideo}
                  >
                    <span className="pause">
                      <i className="bi bi-pause-fill"></i>
                    </span>
                    <span className="play">
                      <i className="bi bi-play-fill"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperGames;
