import React, { useEffect, useState } from "react";
import "./categories.css";
import filterListData from "../data/filterListData";
import GameCard from "../components/GameCard";
export default function Categories({ games, references }) {
  const [data, setData] = useState(games);
  const [filters, setFilters] = useState(filterListData);
  const handleFilterGames = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) filter.active = true;
        return filter;
      })
    );
    if (category === "All") {
      setData(games);
      return;
    }
    setData(games.filter((game) => game.category === category));
  };
  const [text, setText] = useState("");
  const handleSearchGames = (e) => {
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setText(e.target.value);
  };
  useEffect(() => {
    setData(games);
  }, [games]);
  return (
    <section id="categories" className="categories" ref={references}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter._id}
                  className={`${filter.active ? "active" : ""}`}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                value={text}
                onChange={handleSearchGames}
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="row">
          {console.log("✅ Data di Categories:", data)}
          {Array.isArray(data) && data.length > 0 ? (
            data.map((game) => {
              console.log(
                `🎮 Rendering game: ${game.title} with ID: ${game._id}`
              );
              return <GameCard key={game._id} game={game} />;
            })
          ) : (
            <p>Tidak ada data game</p>
          )}
        </div>
      </div>
    </section>
  );
}
