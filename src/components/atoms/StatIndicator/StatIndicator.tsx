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
  // Como 255 é o valor máximo de status de um pokémon e o indicador linear é 100
  // é necessário colocar esse valor num range de 0-100.
  const percentageValue = (value / 255) * 100;

  const getColor = (value: number) => {
    if (value === 0) return grey;
    if (value < 10) return red;
    if (value < 20) return orange;
    if (value < 30) return amber;
    if (value < 50) return green;
    return blue;
  };

  const color = getColor(percentageValue);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color[400]
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledLinearProgress variant="determinate" value={percentageValue} {...props}/>
    </ThemeProvider>
  );
}
