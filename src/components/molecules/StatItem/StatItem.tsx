import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { StatIndicator } from 'components/atoms';

type StatItemProps = {
  name: string;
  value: number;
};

const StyledTypography = styled(Typography)`
  margin-bottom: 5px;
`;

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const StatItem: FC<StatItemProps> = ({ name, value, ...props }) =>
  <Box {...props}>
    <StyledContainer>
      <StyledTypography variant='body2'>{name}</StyledTypography>
      <StyledTypography variant='body2'>{value}</StyledTypography>
    </StyledContainer>
    <StatIndicator value={value} />
  </Box>;
