import React, { useState } from "react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swipergame.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import GameSlide from "./GameSlide";
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
          <SwiperSlide>
            <GameSlide
              key={games._id}
              games={games}
              ToggleVideo={handleToggleVideo}
              active={active}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperGames;
