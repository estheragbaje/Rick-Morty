import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Router>
        <Header />
        <CharacterList />
      </Router>
    </main>
  );
}
