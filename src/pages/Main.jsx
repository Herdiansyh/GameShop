import React, { useEffect, useRef, useState } from "react";

import "./main.css";
import SideMenu from "../components/SideMenu";
import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import MyLibrary from "./MyLibrary";
import Bag from "./Bag";
function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "Bag",
      ref: bagRef,
      active: false,
    },
  ];

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
  const handleSectionActive = (target) => {
    sections.map((section) => {
      console.log(section.ref.current);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? "active" : ""}`}>
        <Header ToggleActive={handleToggleActive} />
        <div className="container-fluid">
          <Home game={games} references={homeRef} />
          <Categories games={games} references={categoriesRef} />
          <MyLibrary games={games} references={categoriesRef} />
          <Bag games={games} references={categoriesRef} />
        </div>
      </div>
    </main>
  );
}

export default Main;
