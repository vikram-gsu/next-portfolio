import * as React from 'react';
import Link from 'next/link';
import Box from './styles/Box';
import styled from 'styled-components';

const MainDiv = styled.div`
  .contentGrid {
    /* border: 1px solid blue; */
    display: grid;
    grid-area: content;
    grid-template: 4em minmax(10em, 1fr) minmax(10em, 1fr) / 0.5fr 1fr 1fr 0.5fr;
    grid-gap: 0.5em;
    grid-template-areas:
      '. title title .'
      '. innerContent innerContent .'
      '. innerContent innerContent .';
    /* padding: 0 0 2em 0; */
    padding-bottom: 5em;
    margin: 0;
    height: 100vh;
    .contentHeader {
      /* border: 1px solid green; */
      grid-area: title;
      padding-left: 1em;
    }
    .contentData {
      /* border: 1px solid green; */
      grid-area: innerContent;
      display: grid;
      grid-template: 1fr 1fr/1fr 1fr;
    }
  }

  .basicProfile {
    grid-area: profileImage;
    margin: 10px auto;
  }

  img {
    height: 50vh;
    margin-bottom: 20px;
    border: ${props => props.theme.border};
    box-shadow: 5px 5px 50px 10px rgba(0, 0, 0, 0.2);
    // box-shadow: ${props => props.theme.boxShadow};
    border-radius: 50%;
  }

  @media all and (max-width: 1100px) {
    .contentGrid {
      grid-template: 0.1fr 0.4fr 1fr 1fr/1fr 1fr;
      grid-template-areas:
        'title title'
        'profileImage profileImage'
        'innerContent innerContent'
        'innerContent innerContent';
      height: auto;
    }
  }
  @media all and (max-width: 800px) {
    .contentGrid {
      grid-template: 0.1fr 0.4fr 1fr 1fr/1fr 1fr;
      grid-template-areas:
        'title title'
        'profileImage profileImage'
        'innerContent innerContent'
        'innerContent innerContent';
      height: auto;
    }
  }

  @media all and (max-width: 600px) {
    .contentGrid {
      grid-template: 0.1fr 0.5fr 1fr/1fr;
      grid-template-areas:
        'title'
        'profileImage'
        'innerContent';
      height: auto;
    }
    .contentGrid .contentData {
      grid-template: 1fr 1fr 1fr 1fr/1fr;
    }
  }
`;

const AboutPage = () => (
  <MainDiv>
    <aside className="contentGrid">
      <div className="contentHeader">
        <h2>ABOUT</h2>
      </div>
      <div className="contentData">
        <Link href="/projects">
          <Box>
            <h3>Software Engineer</h3>
            <span>I work primarily as a professional Software Developer</span>
          </Box>
        </Link>
        <Link href="/climb">
          <Box className="disabled">
            <h3>Rock Climber</h3>
            <span>I qualify myself as an amateur rock climber</span>
          </Box>
        </Link>
        <Link href="/art">
          <Box className="disabled">
            <h3>Artist</h3>
            <span>I work in the visual medium, using a variety of tools</span>
          </Box>
        </Link>
        <Link href="/blog">
          <Box>
            <h3>Storyteller</h3>
            <span>I blog about life and observational stuff</span>
          </Box>
        </Link>
      </div>
    </aside>
  </MainDiv>
);

export default AboutPage;
