import * as React from 'react';
import Link from 'next/link';

import { UrlObject } from 'url';
import styled from 'styled-components';

type Url = string | UrlObject;

type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: Url;
  linkName: string;
};

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.gray[500]};
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
