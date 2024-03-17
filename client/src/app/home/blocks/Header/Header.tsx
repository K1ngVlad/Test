import { FC } from 'react';
import { ListElement, MenuButton } from './components';
import { links } from './constants';

import s from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={s.header}>
      <MenuButton />
      <ul className={s.list}>
        {links.map((link, i) => (
          <ListElement key={i} {...link} />
        ))}
      </ul>
    </header>
  );
};

export { Header };
