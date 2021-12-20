import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import { Map, Menu, Sidebar } from '@components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  // display: inline-block;
  // display: flex;
  // flex-direction: row;
`;

// const ChildContainer = styled.div`
// `;

export default function Home() {
  const [dimension, setDimension] = useState('Power Distance');

  const sidebarStyle = {
    width: '40vw',
    position: 'absolute',
    left: '0px',
    top: '0px',
    background: theme.colors.background,
  };

  const dimensionList = [
    'Power Distance',
    'Individualism',
    'Masculinity',
    'Uncertainty Avoidance',
    'Long Term Orientation',
    'Indulgence',
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          {/* <ChildContainer> */}
          <Map mapWidth={'100%'} dimension={dimension} />
          {/* <Menu /> */}
          <Sidebar
            style={sidebarStyle}
            dimensions={dimensionList}
            setDimension={setDimension}
          />
          {/* </ChildContainer> */}
          {/* <ChildContainer style={{position: 'absolute'}}> */}
          {/* </ChildContainer> */}
        </Container>
      </ThemeProvider>
    </>
  );
}
