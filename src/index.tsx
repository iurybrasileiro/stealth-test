import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components/native';

import Home from './pages/Home';
import { store } from './store';
import theme from './theme';

function Main() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default Main;
