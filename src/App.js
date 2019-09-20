import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Router>
        <Header />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
      </Router>
    </main>
  );
}
