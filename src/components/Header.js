import React from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  const styling = { textDecoration: "none", fontSize: "20px", color: "black" };
  const activeStyling = {
    color: "black",
    fontWeight: "bold",
    border: "0.2px solid grey"
  };

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <NavLink style={styling} activeStyle={activeStyling} to="/">
          Home page
        </NavLink>
        <NavLink style={styling} activeStyle={activeStyling} to="/characters">
          Characters
        </NavLink>
      </nav>
    </header>
  );
}
