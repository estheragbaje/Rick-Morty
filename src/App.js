import React from 'react';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import styled from 'styled-components';
import { Box } from '@chakra-ui/core';

export default function App() {
  return (
    <Box as="main" minHeight="100vh">
      <Box maxWidth="900px" marginX="auto">
        <Router>
          <Header />
          <Route exact path="/" component={WelcomePage} />
          <Route path="/characters" component={CharacterList} />
        </Router>
      </Box>
    </Box>
  );
}
