import React from 'react';
import styled from 'styled-components';

const CreditPageStyles = styled.div`
  grid-area: content;
  grid-template: 4em minmax(30em, 1fr) / 1fr 1fr;
  grid-gap: 0.5em;
  grid-template-areas:
    'title title'
    'innerContent innerContent';
  height: 100vh;

  .contentHeader {
    /* border: 1px solid green; */
    grid-area: title;
    padding-left: 1em;
    margin-bottom: 1em;
  }

  .contact-options {
    grid-area: innerContent;
    display: flex;
    flex-direction: column;
    // text-align: center;
    justify-content: center;
    align-items: center;
    height: 70vh;
    color: ${props => props.theme.primary_foreground};
  }
`;
const CreditsPage = () => (
  <CreditPageStyles>
    <div className="contentHeader">
      <h2>Credits</h2>
    </div>
    <div className="contact-options">
    This website uses the following resources:
      <ul>
        <li>
          <div>
            <a href="https://reactjs.org/" target="_blank">
              React JS{' '}
            </a>
            by Facebook (Open source)
          </div>
        </li>
        <li>
          <div>
            <a href="https://github.com/zeit/next.js" target="_blank">
              Next JS{' '}
            </a>{' '}
            by Zeit (Open Source)
          </div>
        </li>
        <li>
          <div>
            <a href="https://www.typescriptlang.org/" target="_blank">
              Typescript language
            </a>{' '}
            by Microsoft (Open Source)
          </div>
        </li>
        <li>
          <div>
            <a href="https://www.styled-components.com/" target="_blank">
              Styled Components
            </a>
          </div>
        </li>
        <li>
          <div>
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
            >
              Smashicons
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </li>
      </ul>
    </div>
  </CreditPageStyles>
);

export default CreditsPage;
