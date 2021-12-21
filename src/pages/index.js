import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import { Map, Sidebar } from '@components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const dimensionList = [
  'Power Distance',
  'Individualism',
  'Masculinity',
  'Uncertainty Avoidance',
  'Long Term Orientation',
  'Indulgence',
];

export default function Home() {
  const [dimension, setDimension] = useState('Power Distance');


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          {/* <ChildContainer> */}
          <Map mapWidth={'100%'} dimension={dimension} />
          {/* <Menu /> */}
          <Sidebar
            dimensions={dimensionList}
            dimension={dimension}
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
