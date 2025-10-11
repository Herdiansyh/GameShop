import React from "react";
import { SwiperSlide } from "swiper/react";

function GameSlide({ active, games, ToggleVideo }) {
  return (
    <SwiperSlide>
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
              onClick={ToggleVideo}
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
}

export default GameSlide;
