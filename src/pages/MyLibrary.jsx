import React from "react";
import "./mylibrary.css";
export default function MyLibrary({ games, references }) {
  return (
    <section id="library" className="library" ref={references}>
      <h1>My Library</h1>
    </section>
  );
}
