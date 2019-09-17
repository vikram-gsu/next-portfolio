
import styled from 'styled-components';

const InfoBoxStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.primary_background};
    border-radius: 0.25em;
    padding: 2em 1.5em;
    margin: 0.75em;
    text-decoration: none;
    border: 0.1em solid #cccccc;
    color: ${props => props.theme.primary_foreground};
    text-align: left;

  
  // :hover {
  //   border: 1px solid #CD3D73;
  // }
  
  h3 {
    margin-top: 0.5em;
    padding-left: 0;
  }
  
  .learnMore {
    padding-top:1em;
  }
  .links {
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top:1em;
  }
  
  // :hover h3 {
  //   color: #CD3D73;
  //   font-style: italic;
  // }
  
  .links a:hover {
    font-style: italic;
    color: rgb(26, 122, 212);
  }
  
  .links a {
    text-decoration: none;
    padding:0.5em;
    width: 100%;
    color: rgb(26, 122, 212);
    border: 1px solid rgb(26, 122, 212);;
    background: white;
    border-radius: 10px;
    text-align: center;
  }
  
  h3 +ul {
    list-style-type: circle;
    padding-left:1em;
    margin:0;
  }
  h3 + ul > li:hover {
    
  }
`;

export default InfoBoxStyles;