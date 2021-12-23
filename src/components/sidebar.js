import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DimensionInfo, Menu } from '@components';
import { theme } from '@styles';

const Container = styled.div`
  // width: 100%;
  // height: 100%;
  // margin: 0;

  width: 25vw;
  height: calc(100vh - 80px);
  position: absolute;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  left: 0px;
  top: 0px;
  background: ${theme.colors.background};

  box-shadow: 0 0 50px black;
  // border-radius: 0 0 40px 0;
  padding: 40px;
  min-width: 390px;
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  background: ${theme.colors.background};
  font-family: ${theme.fonts.mono};
  line-height: 1.5em;
  font-weight: 500;
  text-transform: uppercase;
`;

const TitleBoxLeft = styled.div`
  position: absolute;
  background: ${theme.colors.accent};
  left: 28px;
  top: 2.75em;
  height: 3em;
  width: 5em;
`;

const TitleBoxRight = styled.div`
  position: absolute;
  background: ${theme.colors.accent};
  right: 25px;
  top: 3.96em;
  height: 3em;
  width: 5em;
`;

const Separator = styled.hr`
  width: 80%;
`;

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export default function Sidebar(props) {
  // const style = { border: `2px solid ${colors[0]}` };

  return (
    <Container id="sidebar">
      <TitleBoxLeft />
      <TitleBoxRight />
      <Title>Hofstede's Globe</Title>

      <p style={{ paddingTop: '5%' }}>
        Hofstede's Globe is a tool for visualizing Geert Hofstede's 6 Cultural
        Dimensions.
      </p>
      <p style={{ marginBottom: '0px' }}>What's that?</p>

      <div style={{ fontSize: '15px' }}>
        <br />
        <Separator />
        <br />
      </div>

      <Menu
        dimensions={props.dimensions}
        dimension={props.dimension}
        setDimension={props.setDimension}
      />

      <DimensionInfo dimension={props.dimension} />
    </Container>
  );
}
