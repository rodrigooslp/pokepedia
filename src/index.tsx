import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import { theme } from 'theme';
import { Home } from 'pages';
// import * as serviceWorker from './serviceWorker';

const App = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StylesProvider injectFirst>
      <Home />
    </StylesProvider>
  </ThemeProvider>
);
ReactDOM.render(App, document.getElementById('root'));
// serviceWorker.register();
