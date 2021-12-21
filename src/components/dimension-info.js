import React from 'react';
import styled from 'styled-components';
import { dimensionInfo } from '@data';

const InfoText = styled.p`
  font-size: 15px;
  white-space: pre-line;
`;

export default function DimensionInfo(props) {
  return (
    <InfoText>
      {dimensionInfo[props.dimension]}
    </InfoText>
  );
}