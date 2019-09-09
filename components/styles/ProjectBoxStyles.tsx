
import styled from 'styled-components';

const ProjectBoxStyles = styled.div`
/* 
.box {
  display: block;
  top: 0px;
  position: relative;
  max-width: 16em;
  background-color: #444;
  border: 0.1em solid #000;
  color: white;
  border-radius: 0.25em;
  padding: 2em 1.5em;
  margin: 0.75em;
  text-decoration: none;
  overflow: scroll;
  text-align: left;
} */
.box {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: 0.1em solid #cccccc;
    color: black;
    border-radius: 0.25em;
    padding: 2em 1.5em;
    margin: 0.75em;
    text-decoration: none;
    text-align: left;
    justify-content: center;
  }
  
  .box:hover {
    border: 1px solid #CD3D73;
  }
  
  .box h3 {
    margin-top: 0.5em;
    padding-left: 0;
  }
  
  .box .learnMore {
    padding-top:1em;
  }
  .box .links {
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top:1em;
  }
  
  .box:hover h3 {
    color: #CD3D73;
    font-style: italic;
  }
  
  .box .links a:hover {
    font-style: italic;
    color: rgb(26, 122, 212);
  }
  /* 
  .box .links a {
    text-decoration: none;
    padding:0.5em;
    width: 100%;
    color: rgb(26, 122, 212);
    border: 1px solid rgb(26, 122, 212);;
    background: #444;
    border-radius: 10px;
    text-align: center;
  } */
  .box .links a {
    text-decoration: none;
    padding:0.5em;
    width: 100%;
    color: rgb(26, 122, 212);
    border: 1px solid rgb(26, 122, 212);;
    background: white;
    border-radius: 10px;
    text-align: center;
  }
  
  .box h3 +ul {
    list-style-type: circle;
    padding:0;
    margin:0;
  }
  .box h3 + ul > li:hover {
    color: #CD3D73;
    font-style: italic;
  }
`;

export default ProjectBoxStyles;