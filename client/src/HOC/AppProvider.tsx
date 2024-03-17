'use client';

import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { store } from '@/store';

interface Props {
  children: ReactNode;
}

const AppProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { AppProvider };
