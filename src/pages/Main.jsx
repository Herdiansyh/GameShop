import React, { useEffect, useState } from "react";

import "./main.css";
import SideMenu from "../components/SideMenu";
import Header from "./Header";
import Home from "./Home";
function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const fetchData = () =>
    fetch("http://localhost:3000/api/gamesData.json")
      .then((res) => res.json())
      .then((res) => {
        setGames(res);
      })

      .catch((e) => console.log(e.message));

  const handleToggleActive = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? "active" : ""}`}>
        <Header ToggleActive={handleToggleActive} />
        <div className="container-fluid">
          <Home game={games} />
        </div>
      </div>
    </main>
  );
}

export default Main;
