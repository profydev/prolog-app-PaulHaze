import * as React from 'react';

import styled from 'styled-components';

import { DashboardButton } from './DashboardButton';

// targets phones as default
// sm is tablet size
const breakpoints = {
  sm: '(min-width: 480px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
};

const HeaderContainer = styled.header`
  max-width: 1280px;
  margin: 0 auto;
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
      <DashboardButton />
    </HeaderContainer>
  );
}
