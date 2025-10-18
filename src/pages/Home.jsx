import React from "react";
import "./home.css";
import SwiperGames from "../components/SwiperGames";
import GameCard from "../components/GameCard";
function Home({ games, references }) {
  return (
    <>
      <section id="home" className="home active" ref={references}>
        <div className="container-fluid">
          <div className="row">
            <SwiperGames game={games} />
          </div>
          <div className="row mb-4 mt-4">
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
            {games.slice(0, 4).map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
