import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '@styles';
import { Map, Sidebar } from '@components';

const Container = styled.div`
  width: window.innerWidth;
  height: window.innerHeight; 
  display: flex;
  flex-direction: row;
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Map />
      </Container>
    </>
  )
}