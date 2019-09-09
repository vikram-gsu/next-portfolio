/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ThemeType } from './types/common';
import NavStyles from './styles/NavStyles';

interface aProps {
  readonly active: boolean;
}
const SelectedA = styled.a<aProps>`
  color: ${props =>
    props.active ? props.theme.bluegreen : props.theme.dullbluegreen} !important;
  text-shadow: ${props =>
    props.active
      ? props.theme.textShadow({ x: '2px', y: '2px', blur: '0px' })
      : props.theme.textShadow({ x: '0px', y: '0px', blur: '1px' })};
`;

type NavProps = {
    pathname?: string;
}
const Nav = ({pathname}: NavProps) => {
  console.log(pathname);
  console.log(pathname === '/projects');
  return (
    <NavStyles>
      <Link href="/projects">
        <SelectedA active={pathname === '/projects'}>Projects</SelectedA>
      </Link>
      <Link href="/blog">
        <SelectedA active={pathname === '/blog'}>Blog</SelectedA>
      </Link>
      <Link href="/about">
        <SelectedA active={pathname === '/about'}>About</SelectedA>
      </Link>
      <Link href="/contact">
        <SelectedA active={pathname === '/contact'}>Contact</SelectedA>
      </Link>
    </NavStyles>
  );
};

export default Nav;
