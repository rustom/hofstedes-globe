import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuItem } from '@components';

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

// const itemIds = [0, 1, 2, 3, 4, 5];

export default function Menu(props) {
  console.log(props);

  return (
    <DimensionSelector variants={variants}>
      {/* <MenuItem i={0} dimension={'asdf'}/> */}
       {props.dimensions && props.dimensions.map((dimension, i) => {
        return(<MenuItem i={i} key={i} dimension={dimension} 
            onclick={() => props.setDimension(dimension)} />)
})} 
    </DimensionSelector>
  );
}
