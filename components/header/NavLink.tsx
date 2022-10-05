import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// allow this component to accept all properties of "a" tag
type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  linkName: string;
  // we can add more properties we need from next/link in the future
};

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.gray[500]};
  text-decoration: none;
  margin: 1rem;
  font-size: 1rem;
`;

export const NavLink = ({ to, linkName }: NavLinkProps) => {
  return (
    <Link href={to} passHref>
      <StyledLink>{linkName}</StyledLink>
    </Link>
  );
};
