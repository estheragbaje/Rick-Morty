import React from "react";
import styled from "styled-components";

//Creating Text component using styled component
const Text = styled.p`
  font-size: ${props => {
    if (props.size === "big") {
      return "1.5rem";
    } else if (props.size === "small") {
      return "0.6rem";
    } else {
      return "1rem";
    }
  }};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`;

export default Text;
