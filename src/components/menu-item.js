import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mixins } from '@styles';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const DimensionItem = styled(motion.p)`
  // ${mixins.whiteLink}
  // background: rgba(0, 0, 0, 0);
  // border: none;
  // padding: 0;
  // color: inherit;
  // font-family: inherit;
  // font-size: inherit;
  all: unset;
  display: block;
  margin: 1em;
  mix-blend-mode: difference;
  // position: relative;
`;

// const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export default function MenuItem(props) {
  // const style = { border: `2px solid ${colors[props.i]}` };
  return (
    <DimensionItem
      // variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      id={props.childId}
      onClick={() => {props.setDimension(props.dimension); 
        document.getElementById('selectionHighlight').style.top = 
        'calc(' + document.getElementById(props.dimension.split(" ").join("")).getBoundingClientRect().top + 'px - 0.8em)';}}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      {/* <a> */}
        {props.dimension} 
      {/* </a> */}

    </DimensionItem>
  );
}
