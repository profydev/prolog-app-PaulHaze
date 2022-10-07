import * as React from 'react';

import styled from 'styled-components';
import { breakpoint } from '@styles/theme';

import { DashboardButton } from './DashboardButton';
import { NavLinks } from './NavLinks';

const HeaderContainer = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  @media ${breakpoint('sm')} {
    padding: 0 2rem;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-large.svg" alt="Prolog logo" />
      <NavLinks />
      <DashboardButton />
    </HeaderContainer>
  );
}
