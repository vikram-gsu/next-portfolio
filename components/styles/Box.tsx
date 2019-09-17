import styled from 'styled-components';
import {ThemeType} from '../types/common';

const Box = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: ${props => props.theme.border};
    color: ${props => props.theme.primary_foreground};
    border-radius: 0.25em;
    padding: 2em 1.5em;
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
    }
    img:hover {
      filter: blur(1px);
    }
  
     h3 {
        margin-top: 8px;

        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        transition: text-shadow 0.5s, color 0.5s;
        z-index: 100;
      }
      .projectSummary {
        z-index: 100;
        width: 100%;
        margin: 0;
        padding: 0;
        background: rgba(18,18,18,0.2);
        box-shadow: 0px 0px 5px 2px rgba(180,90,123,0.4);
      }
      
      
      .learnMore {
        padding-top: 1em;
        display: none;
        text-align: right;
        transition: text-shadow 0.5s, color 0.5s;
        z-index: 100;
      }
      
      // :hover .learnMore {
      //   text-shadow: ${props => props.theme.textShadow({x:'2px', y:'2px', blur:'2px'})};
      //   color: ${props => props.theme.bluegreen};
      // }
      
  //     :hover h3 {
  //       // color: ${props => props.theme.bluegreen};
  // }
  // :hover h3~span {
  //   // color: ${props => props.theme.bluegreen};
  // }
  
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

export default Box;