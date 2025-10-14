import React from "react";

function NavListitem({ item, name, icon, navOnClick }) {
  return (
    <li>
      <a href="/" onClick={() => navOnClick(item._id)}>
        <i className={`bi ${icon}`}></i>
        <span className="navName">{name}</span>
      </a>
    </li>
  );
}

export default NavListitem;
