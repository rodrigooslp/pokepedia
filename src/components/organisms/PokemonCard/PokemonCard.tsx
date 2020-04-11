import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { ElementType, Ability, Avatar, Stats } from 'models';
import { CardFront, CardBack } from 'components/organisms';

type PokemonCardProps = {
  name: string;
  number: number;
  types: ElementType[];
  cover: string;
  avatar: Avatar;
  stats: Stats;
  abilities: Ability[];
  showStats: () => void;
  showCover: () => void;
};

const Scene = styled.div`
  width: 340px;
  height: 540px;
  perspective: 600px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
`;

const Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;

  transform: rotateX( 180deg );
`;


export const PokemonCard: FC<PokemonCardProps> = ({ name, number, types, cover, avatar, stats, abilities, showStats, showCover, ...props }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Scene>
        <Card style={{ transform: !isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)' }}>
          <Front>
            <CardFront
              name={name}
              number={number}
              cover={cover}
              types={types}
              abilities={abilities}
              handleActionClick={flip}
            />
          </Front>

          <Back>
            <CardBack
              name={name}
              number={number}
              types={types}
              avatar={avatar}
              stats={stats}
              abilities={abilities}
              handleActionClick={flip}
            />
          </Back>

        </Card>
      </Scene>
    </>
  );
}
