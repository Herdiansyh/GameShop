import React from "react";
import "./bag.css";
export default function Bag({ games, references }) {
  return (
    <section id="bag" className="bag" ref={references}>
      <h1>My Bag</h1>
    </section>
  );
}
