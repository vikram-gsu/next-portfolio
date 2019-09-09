import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import {ThemeType} from './types/common';


const theme:ThemeType = {
  red: '#CD3D73',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#a6a6a6',
  offwhite: '#EDEDED',
  maxWidth: '2000px',
  bluegreen: '#3dcd98',
  dullbluegreen: '#5ab493',
  pink: '#cd3dba',
  boxShadow: '0 12px 24px 0 rgba(0,0,0,0.09)',
//   0px 0px 20px 5px rgba(0,0,0,0.2);
  border: '1px solid #cccccc',
  textShadow: ({x, y, blur}) => `#CD3D73 ${x} ${y} ${blur}`,
};

const StyledPage = styled.div`
  background: white;
  color: ${({theme}: {theme: ThemeType}) => theme.black};
`;

const Inner = styled.div`
  max-width: ${({theme}: {theme: ThemeType}) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "radnika_next";
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *.after {
    box-sizing: inherit;
  }
  body {
    padding: 0px;
    margin: 0px;
    font-size: 1.75rem;
    font-family: radnika_next;
  }
  a {
    text-decoration: none;
    color: ${({theme}: {theme: ThemeType}) => theme.black};
  }
  h1,h2, h3 {
    text-transform: uppercase;
  }
  h2 {
    text-shadow: ${({theme}: {theme: ThemeType}) => theme.textShadow({x:'2px', y: '2px', blur: '0px'})};
    color: ${({theme}: {theme: ThemeType}) => theme.bluegreen};
  }
`;

type PageProps = {
    children: React.ReactElement;
    pathname?: string;
}

const Page = ({children, pathname}:PageProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header pathname={pathname} />
          <Inner>{children}</Inner>
        </StyledPage>
      </div>
    </ThemeProvider>
  );
};

export default Page;
