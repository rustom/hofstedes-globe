import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dimensionInfo } from '@data';

const InfoText = styled(motion.p)`
  font-size: 15px;
  white-space: pre-line;
`;

const Separator = styled(motion.hr)`
  width: 80%;
`;

const item = {
  beginning: { opacity: 0, y: 20 },
  final: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

export default function DimensionInfo(props) {
  return (
    <div style={{ height: '28em' }}>
      <InfoText variants={item}>
        <br />
        <Separator variants={item} />
        <br />
        {dimensionInfo[props.dimension]}
      </InfoText>
    </div>
  );
}
