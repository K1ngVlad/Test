'use client';

import { FC, ReactNode, createContext, useState } from 'react';

interface MenuState {
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuState>({ toggleMenu: () => {} });

interface Props {
  children: ReactNode;
  element: ReactNode;
}

const MenuProvider: FC<Props> = ({ children, element }) => {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenu((menu) => !menu);
  };

  return (
    <>
      <MenuContext.Provider value={{ toggleMenu }}>
        {menu && element}
        {children}
      </MenuContext.Provider>
    </>
  );
};

export { MenuProvider, MenuContext };
export type { MenuState };
