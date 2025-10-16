import React from "react";
import "./categories.css";
export default function Categories({ games, references }) {
  return (
    <section id="categories" className="categories" ref={references}>
      <h1>Categories</h1>
    </section>
  );
}
