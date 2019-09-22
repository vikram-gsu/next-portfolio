import styled from 'styled-components';

const ContactStyles = styled.div`

    grid-area: content;
    grid-template: 4em minmax(30em, 1fr) / 1fr 1fr ;
    grid-gap:0.5em;
    grid-template-areas:
    "title title"
    "innerContent innerContent";
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
    }
    
  `;

  export default ContactStyles;