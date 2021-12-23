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

const DimensionSelector = styled(motion.div)`
  background: transparent;
`;

const SelectionHighlight = styled(motion.div)`
  background: ${theme.colors.accent};
  height: 3em;
  width: 25em;
  top: 100px;
  // right: ;

  // box-shadow: 0 0 30px black;
  border-radius: 2em;
  position: absolute;

  transition: 0.5s;
  // mix-blend-mode: difference;
`;

export default function Menu(props) {
  function resizeSelector() {
    document.getElementById('selectionHighlight').style.top =
      'calc(' +
      document
        .getElementById(props.dimension.split(' ').join(''))
        .getBoundingClientRect().top +
      'px - 0.8em + ' +
      document.getElementById('sidebar').scrollTop +
      'px)';
    document.getElementById('selectionHighlight').style.width = '500px'; //document.getElementById('dimensionSelector').getBoundingClientRect().width - 50 + 'px';
    document.getElementById('selectionHighlight').style.left = '-160px'; //document.getElementById('dimensionSelector').getBoundingClientRect().right + 'px';
  }

  window.addEventListener('resize', resizeSelector);

  window.addEventListener('click', resizeSelector);

  useEffect(() => {
    resizeSelector();
  }, []);

  return (
    <DimensionSelector id="dimensionSelector">
      <SelectionHighlight id="selectionHighlight" />

      {props.dimensions &&
        props.dimensions.map((dimension, i) => {
          return (
            <MenuItem
              childId={dimension.split(' ').join('')}
              key={i}
              dimension={dimension}
              setDimension={props.setDimension}
            />
          );
        })}
    </DimensionSelector>
  );
}
