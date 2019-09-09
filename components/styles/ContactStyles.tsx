import styled from 'styled-components';

const ContactStyles = styled.div`

    grid-area: content;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 70vh;
  
  
  
  svg {
    width:7em;
    height:5em;
    padding-right:1em;
  }
  
  svg>path {
    fill:grey;
  }
  
  svg:hover >path {
    fill:#CD3D73;
  }
  
  
  @media screen and (max-width:800px){
    svg {
      width: 5em;
      padding-right: 0.5em;
    }
    
  }
  
  @media screen and (max-width:600px){
    
    svg {
      padding-right: 0.5em;
    }
    
  }
  @media screen and (max-width:400px){
      flex-wrap: wrap
    
  }
  `;

  export default ContactStyles;