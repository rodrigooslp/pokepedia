import { createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[400],
      dark: blue[500]
    }
  }
});
