import * as React from 'react';
import styled from 'styled-components';
// import ProjectBoxStyles from './styles/ProjectBoxStyles';
import Box from './styles/Box';

const ProjectBox = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: fill;
  margin: 0 auto;
  filter: blur(5px);
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
    <div>{props.children}</div>
  </Box>
);

export default LinkButtonBox;
