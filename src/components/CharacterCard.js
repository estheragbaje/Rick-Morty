import React from 'react';
import { Box, Image, Text, Heading, PseudoBox } from '@chakra-ui/core';

export default function CharacterCard(props) {
  const { name, location, image, status, species, origin } = props.character;
  return (
    <PseudoBox
      as="article"
      transition="all .3s"
      cursor="pointer"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <Image src={image} objectFit="cover" width="100%" />
      <Box
        bg="yellow.100"
        paddingY="20px"
        paddingX="30px"
        flex={1}
        fontSize="16px"
      >
        <Heading size="sm">{name.toUpperCase()}</Heading>
        <Text marginTop="10px">
          <span>{species}</span>
          <span> </span>
          <span>{status}</span>
        </Text>
        <Text>Location: {location.name}</Text>
        <Text>Origin: {origin.name}</Text>
      </Box>
    </PseudoBox>
  );
}
