import { LinearProgress, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { grey, red, orange, amber, green, blue } from '@material-ui/core/colors';
import React, { FC } from 'react';
import styled from 'styled-components';

type StatIndicatorProps = {
  value: number;
};

const StyledLinearProgress = styled(LinearProgress)`
  height: 8px;
`;

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
      <StyledLinearProgress variant="determinate" value={value} {...props}/>
    </ThemeProvider>
  );
}
