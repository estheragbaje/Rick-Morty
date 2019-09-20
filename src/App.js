import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import styled from "styled-components";

const StyledMain = styled.main`
  min-height: 100vh;
`;

export default function App() {
  return (
    <StyledMain>
      <Router>
        <Header />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
      </Router>
    </StyledMain>
  );
}
