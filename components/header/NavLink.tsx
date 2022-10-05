import * as React from 'react';
import Link from 'next/link';

// allow this component to accept all properties of "a" tag
type IProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  linkName: string;
  // we can add more properties we need from next/link in the future
};

export const NavLink = ({ to, linkName }: IProps) => {
  return (
    <Link href={to}>
      <a>{linkName}</a>
    </Link>
  );
};
