import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mixins } from '@styles';
import { theme } from '@styles';

const DimensionItem = styled(motion.p)`
  // ${mixins.whiteLink}
  // background: rgba(0, 0, 0, 0);
  // border: none;
  // padding: 0;
  // color: inherit;
  // font-size: inherit;
  all: unset;
  font-family: ${theme.fonts.mono};
  text-transform: uppercase;
  display: block;
  margin: 1em;

  mix-blend-mode: difference;

  // position: relative;
  cursor: pointer;
`;

const item = {
  beginning: { opacity: 0, y: 20 },
  final: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

export default function MenuItem(props) {
  // const style = { border: `2px solid ${colors[props.i]}` };
  return (
    <DimensionItem
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      id={props.childId}
      onClick={() => {
        props.setDimension(props.dimension);
        document.getElementById('selectionHighlight').style.top =
          'calc(' +
          document
            .getElementById(props.dimension.split(' ').join(''))
            .getBoundingClientRect().top +
          'px - 0.8em)';
      }}
      key={props.childId}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      {/* <a> */}
      {props.dimension}
      {/* </a> */}
    </DimensionItem>
  );
}
