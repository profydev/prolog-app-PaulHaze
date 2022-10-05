import * as React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const breakpoints = {
  sm: '(min-width: 480px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
};

const NavBarLinks = styled.nav`
  display: none;
  @media ${breakpoints.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.gray[500]};
  text-decoration: none;
  margin: 1rem;
  font-size: 1rem;
`;

export function NavLinks() {
  return (
    <NavBarLinks>
      <Link href="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
      <StyledLink href="/products">Products</StyledLink>
      <StyledLink href="/documentation">Documentation</StyledLink>
      <StyledLink href="/pricing">Pricing</StyledLink>
    </NavBarLinks>
  );
}
