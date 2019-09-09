import * as React from 'react';
import styled from 'styled-components';
// import ProjectBoxStyles from './styles/ProjectBoxStyles';
import Box from './styles/Box';

const ProjectBox = styled.img`
  object-fit: cover;
  object-align: top;
  width: 80%;
  margin: 0 auto;
  // filter: blur(10px);
`;

interface LinkButtonBoxProps {
  id: string;
  applicationUrl: string;
  gitRepoUrl: string;
  projectImageUrl?: string;
  disabled?: boolean;
  children: React.ReactElement | Array<React.ReactElement>;
}
const LinkButtonBox = (props: LinkButtonBoxProps) => (
  <Box href={props.applicationUrl} target="_blank" id={props.id}>
    {props.projectImageUrl && (
      <ProjectBox src={props.projectImageUrl} alt="Project image"></ProjectBox>
    )}
    <div>{props.children}</div>
  </Box>
);

export default LinkButtonBox;
