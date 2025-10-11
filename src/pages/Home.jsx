import React from "react";
import "./home.css";
import SwiperGames from "../components/SwiperGames";
import GameCard from "../components/GameCard";
function Home({ game }) {
  return (
    <>
      <section id="home" className="home active">
        <div className="container-fluid">
          <div className="row">
            <SwiperGames game={game} />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2 className="sectionTitle">Games on promotion</h2>
            </div>
            <div className="align-items-center col-lg-6 d-flex justify-content-end">
              <a href="/" className="viewMore">
                {" "}
                View more games <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="row">
            {game.slice(0, 4).map((games) => (
              <GameCard key={games._id} game={games} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
