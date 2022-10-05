import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  linkName: string;
};

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.gray[500]};
  text-decoration: none;
  margin: 1rem;
  font-size: 1rem;
`;

export function NavLink({ to, linkName }: NavLinkProps) {
  return (
    <Link href={to} passHref>
      <StyledLink>{linkName}</StyledLink>
    </Link>
  );
}
