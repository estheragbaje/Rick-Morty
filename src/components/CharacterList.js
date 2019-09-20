import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const StyledSection2 = styled.section`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
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
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data);
        setCharacters(response.data.results);
        setInitialCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div>
      <SearchForm onSearch={filterList} />
      <StyledSection2 className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </StyledSection2>
    </div>
  );
}
