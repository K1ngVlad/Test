'use client';

import { redirect } from 'next/navigation';
import { FC, ReactNode } from 'react';
import { useAppSelector } from '@/hooks';

interface Props {
  children: ReactNode;
}

const NotAuthorizedRoute: FC<Props> = ({ children }) => {
  const { auth } = useAppSelector((state) => state.auth);

  if (!auth) {
    return <>{children}</>;
  } else {
    redirect('/home');
  }
};

export { NotAuthorizedRoute };
