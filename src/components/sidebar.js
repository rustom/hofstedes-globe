import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { DimensionInfo, Menu } from '@components';
import { theme } from '@styles';

const Container = styled(motion.div)`
  width: 25vw;
  height: calc(100vh - 80px);
  position: absolute;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  left: 0px;
  top: 0px;
  background: ${theme.colors.background};

  box-shadow: 0 0 30px #999999;
  padding: 40px;
  min-width: 390px;
`;

const Title = styled(motion.h1)`
  position: relative;
  text-align: center;
  background: ${theme.colors.background};
  font-family: ${theme.fonts.mono};
  line-height: 1.5em;
  font-weight: 500;
  text-transform: uppercase;
`;

const TitleBoxLeft = styled(motion.div)`
  position: absolute;
  background: ${theme.colors.accent};
  left: 28px;
  top: 2.75em;
  height: 3em;
  width: 5em;
`;

const TitleBoxRight = styled(motion.div)`
  position: absolute;
  background: ${theme.colors.accent};
  right: 25px;
  top: 3.96em;
  height: 3em;
  width: 5em;
`;

const Separator = styled(motion.hr)`
  width: 80%;
`;

const MoreInfoButton = styled(motion.button)`
  // margin: 0px;
  // background: none;
  // border: none;
  // font-family: inherit;
  // font-size: inherit;
  all: unset;
  color: ${theme.colors.accent};
  // text-decoration: underline;
`;

const AnimatedText = styled(motion.p)``;

const containerAnim = {
  beginning: { opacity: 0, left: '-30vw' },
  final: {
    opacity: 1,
    left: 0,
    transition: { duration: 2, when: 'beforeChildren', staggerChildren: 0.2 },
  },
  exit: { opacity: 0 },
};
const item = {
  beginning: { opacity: 0, y: 20 },
  final: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

export default function Sidebar(props) {
  return (
    <AnimatePresence>
      <Container
        id="sidebar"
        variants={containerAnim}
        initial="beginning"
        animate="final"
        exit="exit"
      >
        <TitleBoxLeft variants={item} />
        <TitleBoxRight variants={item} />
        <Title variants={item}>Hofstede's Globe</Title>

        <AnimatedText variants={item} style={{ paddingTop: '5%' }}>
          Hofstede's Globe is a tool for visualizing Geert Hofstede's 6 Cultural
          Dimensions.
        </AnimatedText>
        <MoreInfoButton
          onClick={() => {
            props.setMoreInfo(!props.moreInfo);
          }}
          variants={item}
        >
          What's that?
        </MoreInfoButton>

        <div style={{ fontSize: '15px' }}>
          <br />
          <Separator variants={item} />
          <br />
        </div>

        <Menu
          dimensions={props.dimensions}
          dimension={props.dimension}
          setDimension={props.setDimension}
          variants={item}
        />

        <DimensionInfo dimension={props.dimension} variants={item} />
      </Container>
    </AnimatePresence>
  );
}
