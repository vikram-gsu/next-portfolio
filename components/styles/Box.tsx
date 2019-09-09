import styled from 'styled-components';
import {ThemeType} from '../types/common';

const Box = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-color: #ffffff;
    border: ${props => props.theme.border};
    color: ${props => props.theme.lightgrey};
    border-radius: 0.25em;
    padding: 2em 1.5em;
    margin: 0.75em;
    text-decoration: none;
    text-align: center;
    box-shadow: ${props => props.theme.boxShadow};
    
    
    :hover {
        box-shadow: 0px 0px 20px 5px rgba(180,90,123,0.2);
        transform: scale(1.01);
        cursor: pointer;
    }
  
     h3 {
        margin-top: 8px;

        font-weight: bold;
        text-shadow: ${props => props.theme.textShadow({x:'2px', y:'2px', blur:'2px'})};
        color: ${props => props.theme.offwhite};
        text-transform: uppercase;
        text-align: center;
      }
      
      .learnMore {
        padding-top: 1em;
        display: none;
        text-align: right;
      }
      
      :hover .learnMore {
        text-shadow: ${props => props.theme.textShadow({x:'2px', y:'2px', blur:'2px'})};
        color: ${props => props.theme.bluegreen};
      }
      
      :hover h3 {
        color: ${props => props.theme.bluegreen};
        text-shadow: ${props => props.theme.textShadow({x:'2px', y:'2px', blur: '0px'})};
  }
  :hover h3~span {
    color: ${props => props.theme.bluegreen};
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

export default Box;