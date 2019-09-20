import React from "react";
import styled from "styled-components";

//Creating Text component using styled component
const Text = styled.p`
  font-size: ${props => {
    if (props.size === "big") {
      return "2rem";
    } else if (props.size === "small") {
      return "1rem";
    } else {
      return "1.3rem";
    }
  }};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`;

export default Text;
