
import styled from 'styled-components';

const ProjectStyles = styled.div`
  
  /* border: 1px solid blue; */
  display: grid;
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
  
   .contentData {
    /* border: 1px solid green; */
    grid-area: innerContent;
    display: grid;
    grid-template-rows: minmax(30em, 1fr) 0.5fr 0.5fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "project-1 project-2"
      "project-3 project-3"
      "previous-work previous-work";
  }
  
  #project1 {
    grid-area: project-1;
  }
  #project2 {
    grid-area: project-2;
    display: none;
  }
  #project3 {
    grid-area: project-3;
  }
  
  #previousWork {
    grid-area: previous-work;
    // padding: 1em;
  }
  
  @media screen and (max-width:1200px) {
  
      height: auto;
      grid-template: 4em minmax(8em, 1fr)  / 1fr 1fr ;
      grid-template-areas:
      " title title "
      " innerContent innerContent ";
     .contentData {
      grid-template: 1fr 1fr 0.5fr 0.5fr/1fr;
      grid-template-areas:
      "project-1"
      // "project-2"
      "project-3"
      "previous-work";
    }
  }
  
  @media screen and (max-width: 800px) {
     {
      height: auto;
    }
  }
  
  @media screen and (max-width:600px) {
  
    grid-template: minmax(2.5em, 0.08fr) minmax(5em, 1fr) /1fr;
    /* grid-gap:0.5em; */
    grid-template-areas:
    "title"
    "innerContent";
    height: auto;

     .contentData {
      grid-template: 1fr 1fr 1fr 0.1fr/1fr;
      grid-template-areas:
      "project-1"
      // "project-2"
      "project-3"
      "previous-work";
    }
  }
  `;

  export default ProjectStyles;