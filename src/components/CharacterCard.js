import React from "react";
import Text from "./Text";
import Image from "./Image";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 0.5px solid grey;
    border-radius: 10px;
}
`;

const StyledImage = styled.img`
  width: 100%;
`;

export default function CharacterCard(props) {
  const { name, location, image, status, species, origin } = props.character;
  return (
    <StyledCard>
      <StyledImage src={image} />
      <Text size="big" weight="bold">
        {name}
      </Text>
      <Text>
        <span>{species}</span>
        <span> </span>
        <span>{status}</span>
      </Text>
      <Text>Location: {location.name}</Text>
      <Text>Origin: {origin.name}</Text>
    </StyledCard>
  );
}
