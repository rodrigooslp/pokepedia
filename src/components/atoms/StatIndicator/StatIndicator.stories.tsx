import React from 'react';
import { StatIndicator } from './StatIndicator';

export default {
  title: 'atoms/StatIndicator'
}

export const Grey = () => <StatIndicator value={0} />;
export const Red = () => <StatIndicator value={20} />;
export const Orange = () => <StatIndicator value={30} />;
export const Yellow = () => <StatIndicator value={40} />;
export const Green = () => <StatIndicator value={60} />;
export const Blue = () => <StatIndicator value={100} />;
