import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Menu } from '@components';
import { theme } from '@styles';

const Container = styled.div`
  // width: 100%;
  // height: 100%;
  box-shadow: 0 0 50px black;
  border-radius: 0 0 40px 0;
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
  const style = { border: `2px solid ${colors[0]}` };

  return (
    <Container style={props.style}>
      <h1>Hofstede's Globe</h1>

      <p>
        Hofstede's Globe is a tool for visualizing Hofstede's 6 Cultural
        Dimensions. What's that?
      </p>

      <Menu />
    </Container>
  );
}
