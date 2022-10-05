import * as React from 'react';
import styled from 'styled-components';

import { NavLink } from './NavLink';

const StyledNavLinks = styled.nav`
  display: none;
  @media ${(props) => props.theme.breakpoint.md} {
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
