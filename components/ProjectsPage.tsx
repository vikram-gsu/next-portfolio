import * as React from 'react';
import ProjectStyles from './styles/ProjectStyles';
import ProjectBox from './styles/ProjectBoxStyles';
import InfoBox from './styles/InfoBoxStyles';

const Projects = () => (
  <ProjectStyles>
    <div className="contentHeader">
      <h2>Current Projects</h2>
    </div>

    <div className="contentData">
      {/* <Link > */}
      {/* <ProjectBox applicationUrl="https://master.d2vxe6j27764p8.amplifyapp.com/" id="project1" gitRepoUrl="#" projectImageUrl='/static/next_train.png'> */}
      <ProjectBox
        href="https://master.d2vxe6j27764p8.amplifyapp.com/"
        target="_blank"
        id="project1"
      >
        {/* gitRepoUrl="#" projectImageUrl='/static/next_train.png'> */}
        {/* <a> */}

        <img src="/static/next_train.png" alt="Project image" />
        <div className="projectSummary">
          <h3>Next Train</h3>
          <span>
            Next Train is a web application, currently focussed on Hyderabad
            metro. It displays the stations, train timings, fares, parking
            options etc.
          </span>
        </div>
        {/* </a> */}
      </ProjectBox>
      {/* </Link> */}
      
      <ProjectBox href="#" id="project2">
        
        <div className="projectSummary">
          <h3>ECL Documentation</h3>
          <span>
            This is an open source markdown based application(using Docusaurus),
            aimed at improving the existing pdf based documentation for
            Enterprise Control Language(ECL). ECL is a LexisNexis developed
            language used to work on High Performance Computing Clusters(HPCC
            Systems).
          </span>
        </div>
      </ProjectBox>
      <InfoBox id="project3">
        <h3>At LN:</h3>
        <ul>
          <li>Writing Python packages/module distributions</li>
          <li>Working on React(Reports)</li>
          <li>Building Flask APIs</li>
          <li>Consuming REST/SOAP services in Python</li>
          <li>Programming in ECL on HPCC Systems</li>
          <li>Working on Agile workflow using Gitlab CI, Jira, Zephyr etc.</li>
        </ul>
      </InfoBox>
      
      <InfoBox id="previousWork">
        <h3>Previously:</h3>
        <ul>
          <li>Worked on ASP.NET for Infosys Technologies</li>
          <li>
            Graduated with Masters in Computer Science at Georgia State
            University
          </li>
          <li>
            Open Source contributions include recent type definitions for
            react-leaflet-sidebarv2 on DefinitelyTyped, work on ECL
            documentation etc.
          </li>
          <li>
            I'm part of a team that won a 24 hour healthcare hackathon organized
            by Pitney Bowes and RCB
          </li>
        </ul>
      </InfoBox>
    </div>
  </ProjectStyles>
);

export default Projects;
