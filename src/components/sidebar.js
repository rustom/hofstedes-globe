import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Menu } from '@components';

const Container = styled.div`
  // width: 100%;
  // height: 100%;
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export default function Sidebar(props, i) {
  const style = { border: `2px solid ${colors[0]}` };


  return (
    <Container style={props.style}>
      <h1>
        Hofstede's Globe 
      </h1>

      <p>
        Hofstede's Globe is a tool for visualizing Geert Hofstede's 6 Cultural Dimensions. These are 
      </p> 

      <Menu />



    </Container>
  )
}