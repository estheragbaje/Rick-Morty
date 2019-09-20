import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const styling = { textDecoration: "none", fontSize: "18px", color: "black" };
  const activeStyling = { color: "red", fontWeight: "bold" };

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <NavLink style={styling} activeStyleing={activeStyling} to="/">
          Home page
        </NavLink>
        <NavLink
          style={styling}
          activeStyleing={activeStyling}
          to="/characters"
        >
          Characters
        </NavLink>
      </nav>
    </header>
  );
}
