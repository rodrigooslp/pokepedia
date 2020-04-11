import CssBaseline from '@material-ui/core/CssBaseline';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters, addDecorator } from '@storybook/react';
import React from 'react';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(story =>
  <>
    <CssBaseline />
    {story()}
  </>
);
