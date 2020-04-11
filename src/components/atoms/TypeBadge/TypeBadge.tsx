import React, { FC } from 'react';
import styled from 'styled-components';

import normalBadge from 'assets/types/normal.png';
import fightingBadge from 'assets/types/fighting.png';
import flyingBadge from 'assets/types/flying.png';
import poisonBadge from 'assets/types/poison.png';
import groundBadge from 'assets/types/ground.png';
import rockBadge from 'assets/types/rock.png';
import bugBadge from 'assets/types/bug.png';
import ghostBadge from 'assets/types/ghost.png';
import steelBadge from 'assets/types/steel.png';
import fireBadge from 'assets/types/fire.png';
import waterBadge from 'assets/types/water.png';
import grassBadge from 'assets/types/grass.png';
import electricBadge from 'assets/types/electric.png';
import psychicBadge from 'assets/types/psychic.png';
import iceBadge from 'assets/types/ice.png';
import dragonBadge from 'assets/types/dragon.png';
import darkBadge from 'assets/types/dark.png';
import fairyBadge from 'assets/types/fairy.png';

import { ElementTypes } from 'models';

type TypeBadgeProps = {
  type: ElementTypes;
};

const StyledTypeBadge = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const TypeBadge: FC<TypeBadgeProps> = ({ type, ...props }) => {
  const getBadgeImage = (type: ElementTypes) => {
    switch (type) {
      case 'normal': return normalBadge;
      case 'fighting': return fightingBadge;
      case 'flying': return flyingBadge;
      case 'poison': return poisonBadge;
      case 'ground': return groundBadge;
      case 'rock': return rockBadge;
      case 'bug': return bugBadge;
      case 'ghost': return ghostBadge;
      case 'steel': return steelBadge;
      case 'fire': return fireBadge;
      case 'water': return waterBadge;
      case 'grass': return grassBadge;
      case 'electric': return electricBadge;
      case 'psychic': return psychicBadge;
      case 'ice': return iceBadge;
      case 'dragon': return dragonBadge;
      case 'dark': return darkBadge;
      case 'fairy': return fairyBadge;
      default: return '';
    }
  }

  return (
    <StyledTypeBadge src={getBadgeImage(type)} {...props}/>
  );
};
