import * as React from 'react';
import { motion } from 'framer-motion';

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
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export default function MenuItem(props) {
  const style = { border: `2px solid ${colors[props.i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => props.stateSetter(props.dimension)}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      {/* <p style={style}> */}
        {props.dimension}
      {/* </p> */}
    </motion.li>
  );
}
