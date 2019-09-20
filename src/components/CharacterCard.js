import React from "react";
import Text from "./Text";
import Image from "./Image";

export default function CharacterCard(props) {
  const { name, location, image, status, species, origin } = props.character;
  return (
    <div>
      <Image src={image} />
      <Text>{name}</Text>
      <Text>
        <span>{species}</span>
        <span>{status}</span>
      </Text>
      <Text>Location: {location.name}</Text>
      <Text>Origin: {origin.name}</Text>
    </div>
  );
}
