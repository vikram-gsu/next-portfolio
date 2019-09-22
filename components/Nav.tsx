/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ThemeType } from './types/common';
import { BurgerStyles, MenuStyles } from './styles/NavStyles';
import Switch from './Switch';

interface aProps {
  readonly active?: boolean;
}

const NavItem = styled.div<aProps>`
  position: relative;
  z-index: 2;
  margin: auto 0;
  a {
    color: ${props =>
      props.active
        ? props.theme.primary_foreground
        : props.theme.secondary_heading_color} !important;
    background: ${props => props.active && props.theme.secondary_heading_color} !important;
    border-radius: 10px;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
   
  }
`;

type NavProps = {
  pathname?: string;
  themeSelected: boolean;
  handleThemeChange: (e: React.ChangeEvent) => void;
  menuIsOpen: boolean;
  setMenuOpen: (menuIsOpen: boolean) => void;
};
const Nav = ({
  pathname,
  themeSelected,
  handleThemeChange,
  menuIsOpen,
  setMenuOpen
}: NavProps) => {
  return (
    <div className="nav">
      <BurgerStyles open={menuIsOpen} onClick={() => setMenuOpen(!menuIsOpen)}>
        <span />
        <span />
        <span />
      </BurgerStyles>
      <MenuStyles open={menuIsOpen} onClick={() => setMenuOpen(!menuIsOpen)}>
        <NavItem active={pathname === '/projects'}>
          <Link href="/projects">
            <a href="">Projects</a>
          </Link>
        </NavItem>
        <NavItem active={pathname === '/blog' || pathname === '/'}>
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
        <NavItem active={pathname === '/credits'}>
          <Link href="/credits">
            <a href="">Credits</a>
          </Link>
        </NavItem>
      </MenuStyles>
    </div>
  );
};

export default Nav;
