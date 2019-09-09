/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';

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
  z-index: 2;
  transform: skew(-7deg);
  box-shadow: ${props => props.theme.boxShadow}; 
  a {
      padding: 0.5rem 5rem;
      background: ${props => props.theme.bluegreen};
      color: white;
      text-transform: uppercase;
      text-decoration: none;
    }
    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
          padding-bottom: 1rem;
  }
    @media (max-width: 800px) {
        font-size: 2.5rem;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

type HeaderProps = {
    pathname?: string
}

const Header = ({pathname}: HeaderProps) => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href='/'>
          <a>Vikram Pareddy</a>
        </Link>
      </Logo>
      <Nav pathname={pathname}/>
    </div>
    {/* <div className="sub-bar">
      <p>Search</p>
    </div> */}
  </StyledHeader>
)

export default Header;