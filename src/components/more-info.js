import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles';

const Container = styled.div`
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
`;

const OutboundLink = styled.a`
  :hover {
    text-decoration: underline;
  }
  // :active {
  //   text-decoration: underline;
  // }
`;

export default function MoreInfo(props) {
  return (
    <Container>
      <p>
        Geert Hofstede, assisted by others, came up with six basic issues that
        society needs to come to term with in order to organize itself. These
        are called dimensions of culture. Each of them has been expressed on a
        scale that runs roughly from 0 to 100.
      </p>
      <p>
        Each dimension has been derived by comparing many, but not all,
        countries in the world. The findings can be summarized into six world
        maps of the distribution of that dimension. Of course, in reality there
        can be quite a bit of within-country variation; these maps should be
        seen as rough "climate maps" of culture.
      </p>
      <p>
        This website allows you to explore the Hofstede's estimated scores for
        every available country and each dimension. Please do not consider this
        data official or static in any way. Hofstede's research methods
        naturally had flaws, and societal cultures are constantly shifting.
        Scores are just supposed to indications of general trends, and never
        tell the fully story of a country's people.
      </p>
      <p>
        I hope this information helps people to understand and communicate with
        different cultures more effectively, rather than judge them. For more
        information about Hofstede's scientific methods, please consult the
        wealth of academic literature that can be found on the topic.
      </p>
      <p>
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
      </p>
      <p>
        Thank you so much for exploring my project! You can learn more about me
        at{' '}
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
      </p>
    </Container>
  );
}
