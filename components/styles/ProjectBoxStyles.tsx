import styled from 'styled-components';
import {ThemeType} from '../types/common';

const ProjectBoxStyles = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    // background-color: #ffffff;
    border: ${props => props.theme.border};
    color: ${props => props.theme.primary_foreground};
    border-radius: 0.25em;
    // padding: 2em 1.5em;
    margin: 0.75em;
    text-decoration: none;
    text-align: center;
    transition: box-shadow 0.5s, transform 0.5s;
    // transition: scale 1s;

    object-fit: contain;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      filter: blur(0.5px);
      transition: filter 0.5s;
    }
    :hover {
      box-shadow: ${props => props.theme.boxShadow};
      transform: translateY(-2%);
      cursor: pointer;
      color: ${props => props.theme.dark};
      h3 {
        color: ${props => props.theme.dark};

      }

      
    }
  
  
    h3 {
      margin-top: 8px;

      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      // transition: text-shadow 0.5s, color 0.5s;
      z-index: 100;
    }
    .projectSummary {
      z-index: 100;
      width: 100%;
      margin: 0;
      padding: 0;
      background: rgba(18,18,18,0.2);
      box-shadow: ${props => props.theme.boxShadow};
    }
  
  .invisible {
    visibility: hidden;
  }
  
  .disabled {
    color: black;
    background: rgba(190, 190, 190, 0.541);
    pointer-events: none;
    cursor: default;
    text-decoration: none;
    color: black;
  }
  
   .disabled:hover {
    background: grey;
  }
`;

export default ProjectBoxStyles;