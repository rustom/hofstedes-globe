import React, { componentDidMount, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuItem } from '@components';
import { theme } from '@styles';

// const variants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// };

const variants = {
  // 'PowerDistance': 
};

const DimensionSelector = styled(motion.div)`
  background: transparent;
`;

const SelectionHighlight = styled(motion.div)`
  background: ${theme.colors.accent};
  height: 3em;
  width: 25em;
  top: 100px;
  left: -100px;

  box-shadow: 0 0 40px black;
  border-radius: 2em;
  position: absolute;

  transition: 0.5s;
  mix-blend-mode: difference;
`;

export default function Menu(props) {
  // const changeDimension = function(newDimension) {
  //   console.log(newDimension);
  //   props.setDimension(newDimension);
  // }

  useEffect(() => {
    document.getElementById('selectionHighlight').style.top = 
        'calc(' + document.getElementById(props.dimension.split(" ").join("")).getBoundingClientRect().top + 'px - 0.8em)'
        return;
  }, []);

  return (
    <DimensionSelector>
    <SelectionHighlight id="selectionHighlight" />
    
      {props.dimensions &&
        props.dimensions.map((dimension, i) => {
          return (
            <MenuItem
            childId={dimension.split(" ").join("")}
            key={i}
            dimension={dimension}
            setDimension={props.setDimension}
            // style={{position: 'absolute'}}
            />
            );
          })}
    </DimensionSelector>
  );
}
