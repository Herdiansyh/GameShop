import React from "react";

function NavListitem({ name, icon }) {
  return (
    <li>
      <a href="#">
        <i className={`bi ${icon}`}></i>
        <span className="navName">{name}</span>
      </a>
    </li>
  );
}

export default NavListitem;
