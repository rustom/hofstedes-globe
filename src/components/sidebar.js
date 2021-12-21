import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Menu } from '@components';
import { theme } from '@styles';

const Container = styled.div`
  // width: 100%;
  // height: 100%;

  width: 25vw;
  position: absolute;
  left: 0px;
  top: 0px;
  background: #0a1930; //theme.colors.background,

  box-shadow: 0 0 50px black;
  border-radius: 0 0 40px 0;
  padding: 40px;
  min-width: 300px;
`;

const Title = styled.h1`
  font-family: ${theme.fonts.mono};
  line-height: 1.5em;
  font-weight: 500;
  text-transform: uppercase;
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export default function Sidebar(props) {
  // const style = { border: `2px solid ${colors[0]}` };

  return (
    <Container>
      <Title>Hofstede's Globe</Title>

      <p>
        Hofstede's Globe is a tool for visualizing Hofstede's 6 Cultural
        Dimensions. 
      </p>
      <p>
        What's that?
      </p>

      <Menu dimensions={props.dimensions} dimension={props.dimension} setDimension={props.setDimension} />
    </Container>
  );
}
