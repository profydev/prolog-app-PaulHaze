import * as React from 'react';
import styled from 'styled-components';

import { NavLink } from './NavLink';

// Links will be hidden by default
// But displayed on screens 768px and above
const StyledNavLinks = styled.nav`
  display: none;
  @media ${({ theme }) => theme.breakpoint.md} {
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
