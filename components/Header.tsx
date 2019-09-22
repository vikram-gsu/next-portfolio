/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';
import Switch from './BulbSwitch';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 1002;
  transform: skew(-7deg);
  box-shadow: ${props => props.theme.boxShadow};
  a {
    padding: 0.5rem 5rem;
    background: ${props => props.theme.primary_heading_color};
    color: ${props => props.theme.primary_foreground};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
    padding-bottom: 1rem;
    font-size: 2rem;
    box-shadow: none;
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    a {
      padding: 0 1rem;
    }
  }
`;

const StyledHeader = styled.header`
  background: ${props => props.theme.primary_background};
  position: sticky;
  top: 0;
  z-index: 2002;
  border-bottom: 10px solid ${props => props.theme.primary_foreground};
  .bar {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-template-areas:
      "logo theme-switcher nav-menu";
    h1 {
      grid-area: logo
    }
    .themeSwitcher {
      grid-area: theme-switcher;
      justify-self: end;
    }
    .nav {
      grid-area: nav-menu;
      justify-self: flex-start;
    }
    justify-items: end;
    align-items: center;
    
    @media (max-width: 1300px) {
      align-items: end;
      justify-items: center;
      padding-top: 2rem;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas:
      "nav-menu logo theme-switcher";
    }
  }
`;

type HeaderProps = {
  pathname?: string;
  themeSelected: boolean;
  handleThemeChange: (e: React.ChangeEvent) => void;
  menuIsOpen: boolean;
  setMenuOpen: (menuIsOpen: boolean) => void;
};

const Header = ({
  pathname,
  themeSelected,
  handleThemeChange,
  menuIsOpen,
  setMenuOpen
}: HeaderProps) => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Vikram Pareddy</a>
        </Link>
      </Logo>
      <div className="themeSwitcher">
        <Switch checked={themeSelected} handleThemeChange={handleThemeChange} />
      </div>
      <Nav
        pathname={pathname}
        themeSelected={themeSelected}
        handleThemeChange={handleThemeChange}
        menuIsOpen={menuIsOpen}
        setMenuOpen={setMenuOpen}
      />
    </div>
  </StyledHeader>
);

export default Header;
