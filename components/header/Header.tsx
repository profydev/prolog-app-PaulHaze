import * as React from 'react';

import styled from 'styled-components';
import { Routes } from '@config/routes';

import { DashboardButton } from './DashboardButton';

// const breakpoints = {
//   sm: '(max-width: 480px)',
//   md: '(max-width: 768px)',
//   lg: '(max-width: 1024px)',
//   xl: '(max-width: 1300px)',
// };

// targets phones as default
// sm is tablet size
const breakpoints = {
  sm: '(min-width: 480px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1300px)',
};
// const breakRems = {
//   sm: '(min-width: 43rem)',
//   md: '(min-width: 62rem)',
//   lg: '(min-width: 82rem)',
//   xl: '(min-width: 82rem)',
// };

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  @media ${breakpoints.sm} {
  }
  @media ${breakpoints.md} {
  }
  @media ${breakpoints.lg} {
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-large.svg" alt="Prolog logo" />
      {/* <a href={Routes.projects}>Dashboard</a> */}
      <DashboardButton />
    </HeaderContainer>
  );
}
