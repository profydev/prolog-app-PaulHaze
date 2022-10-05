import * as React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { Routes } from '@config/routes';

const DashboardLink = styled.div`
  background: ${(props) => props.theme.color.primary[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.primary[600]};
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  a {
    color: white;
    text-decoration: none;
    font-size: 12px;
    padding: 0.8rem 1rem;
    @media ${({ theme }) => theme.breakpoint.sm} {
      padding: 1rem 1.2rem;
      font-size: 14px;
    }
    @media ${({ theme }) => theme.breakpoint.md} {
      padding: 1rem 1.5rem;
      font-size: 16px;
    }
  }
`;

export function DashboardButton() {
  return (
    <DashboardLink>
      <Link href={Routes.projects}>
        <a>Open Dashboard</a>
      </Link>
    </DashboardLink>
  );
}
