import React from "react";

function NavListitem({ item, name, icon, navOnClick }) {
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : ""}`}
        onClick={() => navOnClick(item._id, item.target)}
      >
        <i className={`bi ${icon}`}></i>
        <span className="navName">{name}</span>
      </a>
    </li>
  );
}

export default NavListitem;
