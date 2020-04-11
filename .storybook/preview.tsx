import { ThemeProvider, StylesProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters, addDecorator } from '@storybook/react';
import React from 'react';

import { theme } from '../src/theme';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(story =>
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider injectFirst>
        {story()}
      </StylesProvider>
  </ThemeProvider>
);
