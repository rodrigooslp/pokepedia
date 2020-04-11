import { LinearProgress, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { grey, red, orange, amber, green, blue } from '@material-ui/core/colors';
import React, { FC } from 'react';

type StatIndicatorProps = {
  value: number;
};

export const StatIndicator: FC<StatIndicatorProps> = ({ value, ...props }) => {
  const getColor = (value: number) => {
    if (value === 0) return grey;
    if (value < 25) return red;
    if (value < 40) return orange;
    if (value < 60) return amber;
    if (value < 90) return green;
    return blue;
  };

  const color = getColor(value);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color[400]
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <LinearProgress variant="determinate" value={value} {...props}/>
    </ThemeProvider>
  );
}
