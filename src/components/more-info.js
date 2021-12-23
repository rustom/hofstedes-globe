import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from '@styles';

const Container = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 35vw;
  width: 30vw;
  height: 80vh;
  transform: translate(0, -50%);

  background: ${theme.colors.background};
  border-radius: 30px;
  box-shadow: 0 0 20px #999999;

  padding: 40px;

  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  opacity: 0;
`;

const CloseButton = styled(motion.button)`
  // position: fixed;
  // top: 50%;
  // left: 35vw;
  all: unset;
  font-size: 50px;
  text-align: right;
  float: right;
  // transform: translateY(-50%);
  background: ${theme.colors.background};
  color: ${theme.colors.accent};
`;

const AnimatedText = styled(motion.p)``;

const OutboundLink = styled.a`
  :hover {
    text-decoration: underline;
  }
`;

const containerAnim = {
  beginning: { opacity: 0 },
  final: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.1 },
  },
  exit: { opacity: 0 },
};
const item = {
  beginning: { opacity: 0, y: 20 },
  final: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};
export default function MoreInfo(props) {
  useEffect(() => {});

  return (
    <AnimatePresence>
      {props.moreInfo && (
        <Container
          key="moreInfoContainer"
          variants={containerAnim}
          intial="beginning"
          animate="final"
          exit="exit"
        >
          <CloseButton
            key="closeButton"
            onClick={() => {
              props.setMoreInfo(false);
              // document.getElementById('moreInfoContainer').style.opacity = 0;
              // const p = new Promise((resolve) => setTimeout(resolve, 2000));
              // p.then(() => { props.setMoreInfo(false) });
            }}
            // whileHover={{ scale: 1.5, transition: { duration: 0.1 } }}
            // whileTap={{ scale: 0.85, transition: { duration: 0.1 } }}
          >
            ×
          </CloseButton>
          <br />
          <AnimatedText key="1" variants={item}>
            Geert Hofstede, assisted by others, came up with six basic issues
            that society needs to come to term with in order to organize itself.
            These are called dimensions of culture. Each of them has been
            expressed on a scale that runs roughly from 0 to 100.
          </AnimatedText>
          <AnimatedText key="2" variants={item}>
            Each dimension has been derived by comparing many, but not all,
            countries in the world. The findings can be summarized into six
            world maps of the distribution of that dimension. Of course, in
            reality there can be quite a bit of within-country variation; these
            maps should be seen as rough "climate maps" of culture.
          </AnimatedText>
          <AnimatedText key="3" variants={item}>
            This website allows you to explore the Hofstede's estimated scores
            for every available country and each dimension. Please do not
            consider this data official or static in any way. Hofstede's
            research methods naturally had flaws, and societal cultures are
            constantly shifting. Scores are just supposed to indications of
            general trends, and never tell the fully story of a country's
            people.
          </AnimatedText>
          <AnimatedText key="4" variants={item}>
            I hope this information helps people to understand and communicate
            with different cultures more effectively, rather than judge them.
            For more information about Hofstede's scientific methods, please
            consult the wealth of academic literature that can be found on the
            topic.
          </AnimatedText>
          <AnimatedText key="5" variants={item}>
            Summaries and data were taken from&nbsp;
            <OutboundLink
              href="https://geerthofstede.com/"
              aria-label="Geert Hofstede"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geert Hofstede's website
            </OutboundLink>
            .
          </AnimatedText>
          <AnimatedText key="6" variants={item}>
            Thank you so much for exploring my project! You can learn more about
            me at{' '}
            <OutboundLink
              href="https://rustom.dev/"
              aria-label="Hofstede's Globe Source Code"
              target="_blank"
              rel="noopener noreferrer"
            >
              my website
            </OutboundLink>{' '}
            and access the source code for this website on{' '}
            <OutboundLink
              href="https://github.com/rustom/hofstedes-globe"
              aria-label="Hofstede's Globe Source Code"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </OutboundLink>
            . I'd love it if you reached out to me with questions!
          </AnimatedText>
        </Container>
      )}
    </AnimatePresence>
  );
}
