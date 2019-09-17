/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ThemeType } from './types/common';
import NavStyles from './styles/NavStyles';

interface aProps {
  readonly active: boolean;
}

const NavItem = styled.div<aProps>`
  position: relative;
  z-index: 2;
  margin: auto 0;
  a {
    color: ${props =>
      props.active ? props.theme.primary_foreground : props.theme.secondary_heading_color} !important;
    background: ${props => props.active && props.theme.primary_heading_color};
    border-radius: 10px;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

type NavProps = {
  pathname?: string;
};
const Nav = ({ pathname }: NavProps) => {
  return (
    <NavStyles>
      <NavItem active={pathname === '/projects'}>
        <Link href="/projects">
          <a href="">Projects</a>
        </Link>
      </NavItem>
      <NavItem active={pathname === '/blog'}>
        <Link href="/blog">
          <a href="">Blog</a>
        </Link>
      </NavItem>
      <NavItem active={pathname === '/about'}>
        <Link href="/about">
          <a href="">About</a>
        </Link>
      </NavItem>
      <NavItem active={pathname === '/contact'}>
        <Link href="/contact">
          <a href="">Contact</a>
        </Link>
      </NavItem>
    </NavStyles>
  );
};

export default Nav;
