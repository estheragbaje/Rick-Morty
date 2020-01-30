import { Box, SimpleGrid } from '@chakra-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';



export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [initialCharacters, setInitialCharacters] = useState([]);

  const filterList = event => {
    let items = initialCharacters;
    items = items.filter(
      item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    );
    setCharacters(items);
  };

  const getCharacter = () => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
        setInitialCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <Box paddingY="40px">
      <SearchForm onSearch={filterList} />
      <SimpleGrid columns={3} spacing={4}>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
