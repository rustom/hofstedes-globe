import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import { ColorKey, Map, MoreInfo, Sidebar } from '@components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const dimensionList = [
  'Power Distance',
  'Individualism',
  'Masculinity',
  'Uncertainty Avoidance',
  'Long Term Orientation',
  'Indulgence',
];

export default function Home() {
  const [dimension, setDimension] = useState('Power Distance');
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          {/* <ChildContainer> */}
          <Map mapWidth={'100%'} dimension={dimension} />
          <ColorKey />
          {/* <Menu /> */}
          <Sidebar
            dimensions={dimensionList}
            dimension={dimension}
            setDimension={setDimension}
            moreInfo={moreInfo}
            setMoreInfo={setMoreInfo}
          />
          {/* <AnimatePresence> */}
          <MoreInfo moreInfo={moreInfo} setMoreInfo={setMoreInfo} />
          {/* {moreInfo && (
            )} */}
          {/* // <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            // </motion.div> */}
          {/* </AnimatePresence> */}
          {/* </ChildContainer> */}
          {/* <ChildContainer style={{position: 'absolute'}}> */}
          {/* </ChildContainer> */}
        </Container>
      </ThemeProvider>
    </>
  );
}
