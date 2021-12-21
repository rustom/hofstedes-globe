import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles';

const Container = styled.div`
  position: fixed; 
  right: 10%;
  bottom: 10%;
  background: ${theme.colors.background};
  width: 15%;
  height: 10%;
  border-radius: 30px;
  box-shadow: 0 0 30px black;
`;

const Colors = styled.div`
  position: absolute;
  right: 50%;
  bottom: 50%;
  height: 30%;
  width: 80%;
  background-image: linear-gradient(to right, #00b3ff, #eeeeee, #ff4c00);
  border-radius: 30px;
  transform: translate(50%, 15%);
`;

const KeyText = styled.p`
  position: absolute;
  text-align: justify;
  text-align-last: justify;
  font-size: 70%;
  width: 70%;
  bottom: 0px;
  left: 15%;
  margin: 0 0 6% 0;
`;

export default function ColorKey() {
  return (
    <Container>
      <Colors></Colors>
      <KeyText>
        0 50 100
      </KeyText>
    </Container>
  );
}