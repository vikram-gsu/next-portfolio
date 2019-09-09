import styled from 'styled-components';

const MediumItemStyles = styled.div`

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    border: 0.1em solid #cccccc;
    color: black;
    border-radius: 0.25em;
    padding: 2em 1.5em;
    margin: 0.75em;
    text-decoration: none;
    text-align: left;
  }
  
  .box:hover {
    border: 1px solid #CD3D73;
  }
  
  .box h3 {
    margin-top: 8px;
  }
  
  .box .learnMore {
    padding-top: 1em;
  }
  
  .box:hover .learnMore {
    color: #CD3D73;
    font-style: italic;
  }
  
  .box:hover h3 {
    color: #CD3D73;
    font-style: italic;
  }
  
  .disabled {
    color: black;
    background: rgba(190, 190, 190, 0.541);
    pointer-events: none;
    cursor: default;
    text-decoration: none;
    color: black;
  }
  
  .box .disabled:hover {
    background: grey;
  }
  
  .button:hover {
    font-style: italic;
    color: rgb(26, 122, 212);
  }
  
  /* .button {
    text-decoration: none;
    padding:0.5em;
    width: 100%;
    color: rgb(26, 122, 212);
    border: 1px solid rgb(26, 122, 212);;
    background: #444;
    border-radius: 10px;
    text-align: center;
  } */
  .button {
    text-decoration: none;
    padding:0.5em;
    width: 100%;
    color: rgb(26, 122, 212);
    border: 1px solid rgb(26, 122, 212);;
    background: white;
    border-radius: 10px;
    text-align: center;
  }

  .content {
    text-align: left;
  }
  
  .level {
    display: flex;
    justify-content: space-between;
    padding-top:1em;
  }
  
  
  @media screen and (max-width:450px){
    .level {
      flex-wrap: wrap;
      justify-content: center;
    }
    .levelLeft {
      height: 2em;
    }
  }
  `;

  export default MediumItemStyles;