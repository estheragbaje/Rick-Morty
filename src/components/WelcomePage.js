import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  display: block;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1000px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledImage
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
