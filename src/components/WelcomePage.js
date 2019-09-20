import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  display: block;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1000px;
`;

const StyledHeadline = styled.h1`
  font-size: 32px;
`;

const StyledSection = styled.section`
  /* height: 100vh; */
`;
export default function WelcomePage() {
  return (
    <StyledSection className="welcome-page">
      <header>
        <StyledHeadline>Welcome to the ultimate fan site!</StyledHeadline>
        <StyledImage
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </StyledSection>
  );
}
