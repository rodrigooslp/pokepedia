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

export const StatItem: FC<StatItemProps> = ({ name, value, ...props }) =>
  <Box {...props}>
    <StyledTypography variant='body2'>{name}</StyledTypography>
    <StatIndicator value={value} />
  </Box>;
