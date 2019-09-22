import React, {useState} from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import { ThemeType } from './types/common';

const themeConstants = {
  white: 'white',
  black: '#393939',
  grey: '#a6a6a6',
  offwhite: '#EDEDED',
  maxWidth: '2000px',
  bluegreen: '#3dcd98',
  dullbluegreen: '#5ab493',
}

const lightTheme: ThemeType = {
  primary_background: themeConstants.white,
  primary_foreground: themeConstants.black,
  secondary_background: themeConstants.grey,
  header_background: themeConstants.offwhite,
  primary_heading_color: themeConstants.bluegreen,
  secondary_heading_color: themeConstants.dullbluegreen,
  light: themeConstants.white,
  dark: themeConstants.black,
  maxWidth: '2000px',
  boxShadow: '0 2px 5px 0 rgba(0,0,0,0.41)',
  //   0px 0px 20px 5px rgba(0,0,0,0.2);
  border: '1px solid #cccccc',
  // textShadow: ({ x, y, blur }) => `#CD3D73 ${x} ${y} ${blur}`
};

const darkTheme: ThemeType = {
  primary_background: themeConstants.black,
  primary_foreground: themeConstants.offwhite,
  secondary_background: themeConstants.grey,
  header_background: themeConstants.grey,
  primary_heading_color: themeConstants.bluegreen,
  secondary_heading_color: themeConstants.dullbluegreen,
  light: themeConstants.white,
  dark: themeConstants.black,
  maxWidth: '2000px',
  boxShadow: '0 2px 5px 0 rgba(255,255,255,0.57)',
  //   0px 0px 20px 5px rgba(0,0,0,0.2);
  border: '1px solid #cccccc',
};

const BackgroundImage = styled.div`
  position: absolute;
  bottom: 8px;
  left: 16px;
  width: 100%;
  background: url('/static/background_circle.svg');
`;

const Inner = styled.div`
  /* border: 1px solid blue; */
  display: grid;
  grid-template: minmax(10em, 3fr) / 0.2fr 1fr 0.2fr;
  grid-gap: 0.5em;
  grid-template-areas: '. content .';
  /* padding: 0 0 2em 0; */
  padding-bottom: 5em;
  margin: 0;
  height: 100vh;

  max-width: ${({ theme }: { theme: ThemeType }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;

  @media all and (max-width: 1100px) {
    grid-template: minmax(10em, 3fr) / 0.1fr 1fr 0.1fr;
    grid-gap: 0.5em;
    grid-template-areas: '. content .';
    height: auto;
  }
  @media all and (max-width: 800px) {
    grid-template: minmax(10em, 3fr) / 1fr;
    grid-gap: 0.5em;
    grid-template-areas: 'content';
    height: auto;
  }
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
    background: ${({ theme }: { theme: ThemeType }) => theme.primary_background};
  }
  a {
    text-decoration: none;
    color: ${({ theme }: { theme: ThemeType }) => theme.primary_foreground};
  }
  h1,h2, h3 {
    text-transform: uppercase;
    color: ${({ theme }: { theme: ThemeType }) => theme.primary_foreground};
  }
  
`;

type PageProps = {
  children: React.ReactElement;
  pathname?: string;
};

type PageState = {
  theme: ThemeType;
  themeSelected: boolean;
};

function Page(props:PageProps) {
  const [themeSelected, toggleThemeSelected] = useState(false);
  const [theme, setTheme] = useState(darkTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = (e: React.ChangeEvent) => {
    let { checked } = e.target as HTMLInputElement;
    !checked? setTheme(darkTheme ):setTheme(lightTheme);
    toggleThemeSelected(!themeSelected);
  };

  const { children, pathname } = props;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Meta />
        <Header
          themeSelected = {themeSelected}
          pathname={pathname}
          handleThemeChange={handleThemeChange}
          menuIsOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <Inner>{children}</Inner>
        <BackgroundImage />
      </div>
    </ThemeProvider>
  );
}

export default Page;
