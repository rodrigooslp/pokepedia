import React, { FC } from 'react';
import { Button } from '@material-ui/core';

type ActionButtonProps = {
  handleClick: () => void;
};

export const ActionButton: FC<ActionButtonProps> = ({ handleClick, children, ...props }) =>
  <Button color='primary' onClick={handleClick} {...props}>{children}</Button>;
