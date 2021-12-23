import React from 'react';
import styled from 'styled-components';
import { dimensionInfo } from '@data';

const InfoText = styled.p`
  font-size: 15px;
  white-space: pre-line;
`;

const Separator = styled.hr`
  width: 80%;
`;

export default function DimensionInfo(props) {
  return (
    <div style={{ height: '28em' }}>
      <InfoText>
        <br />
        <Separator />
        <br />
        {dimensionInfo[props.dimension]}
      </InfoText>
    </div>
  );
}
