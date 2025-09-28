import React from "react";
import "./home.css";
import SwiperGames from "../components/SwiperGames";
function Home({ game }) {
  return (
    <>
      <section id="home" className="home">
        <div className="container-fluid">
          <div className="row">
            <SwiperGames game={game} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
