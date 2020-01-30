import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import './index.css';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
