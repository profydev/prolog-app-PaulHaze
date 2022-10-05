import * as React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { Routes } from '@config/routes';

const DashboardLink = styled.div`
  width: 165px;
  height: 44px;
  background: #7f56d9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #7f56d9;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
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
