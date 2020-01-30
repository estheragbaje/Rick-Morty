import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';
import { Heading } from '@chakra-ui/core';

export default function Header() {
  const styling = { textDecoration: 'none', fontSize: '20px', color: 'black' };
  const activeStyling = {
    color: 'black',
    fontWeight: 'bold',
    border: '0.2px solid grey'
  };

  return (
    <header className="ui centered">
      <Heading textAlign="center" paddingY="20px">
        Rick & Morty Fan Page
      </Heading>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <NavLink style={styling} activeStyle={activeStyling} to="/">
          Home page
        </NavLink>
        <NavLink style={styling} activeStyle={activeStyling} to="/characters">
          Characters
        </NavLink>
      </nav>
    </header>
  );
}
