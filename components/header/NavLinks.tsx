import * as React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import { NavLink } from './NavLink';

const breakpoints = {
  sm: '(min-width: 480px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
};

const StyledNavLinks = styled.nav`
  display: none;
  @media ${breakpoints.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export function NavLinks() {
  return (
    <StyledNavLinks>
      <NavLink to="/" linkName="Home" />
      <NavLink to="/products" linkName="Products" />
      <NavLink to="/documentation" linkName="Documentation" />
      <NavLink to="/pricing" linkName="Pricing" />
    </StyledNavLinks>
  );
}
