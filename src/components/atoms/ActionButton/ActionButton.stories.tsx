import { action } from '@storybook/addon-actions';
import React from 'react';
import { ActionButton } from './ActionButton';

export default {
  title: 'atoms/ActionButton'
}

export const Default = () => <ActionButton handleClick={action('clicked')}>STATS</ActionButton>;
