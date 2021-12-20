import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuItem } from '@components';
import { property } from 'css-tree';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const DimensionSelector = styled(motion.ul)`
  list-style-type: none;
`;

export default function Menu(props) {
  // const changeDimension = function(newDimension) {
  //   console.log(newDimension);
  //   props.setDimension(newDimension);
  // }

  return (
    <DimensionSelector variants={variants}>
      {props.dimensions &&
        props.dimensions.map((dimension, i) => {
          return (
            <MenuItem
              i={i}
              key={i}
              dimension={dimension}
              stateSetter={props.setDimension}
              // onClick={() => {changeDimension(dimension)}}
            />
          );
        })}
    </DimensionSelector>
  );
}
