import React from "react";
import "./sidemenu.css";
import navListData from "../data/navListData";
import NavListitem from "./NavListitem";
import NavListSocial from "./NavListSocial";

function SideMenu({ active }) {
  const navData = navListData;
  return (
    <div className={`sideMenu ${active ? "active" : ""}`}>
      <a href="/" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {/* lanssung gunakan () agar langsung return */}
        {navData.map((item) => (
          <NavListitem name={item.name} key={item._id} icon={item.icon} />
        ))}
      </ul>
      <ul className="social">
        <NavListSocial />
      </ul>
    </div>
  );
}

export default SideMenu;
