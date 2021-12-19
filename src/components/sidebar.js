import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 20vw;
  height: 100vh;
`;

export default function Sidebar() {
  return (
    <Container>
      <h1>
        Hofstede's Globe 
      </h1>

      <p>
        Hofstede's Globe is a tool for visualizing Geert Hofstede's 6 Cultural Dimensions. 
      </p>

    </Container>
  )
}