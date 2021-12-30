import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import Home from './pages/Home';
import theme from './theme';

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default Main;
