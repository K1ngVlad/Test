import { FC } from 'react';
import { CloseButton, ListElement } from './components';
import { links } from './constants';

import s from './Menu.module.scss';

const Menu: FC = () => {
  return (
    <section className={s.menu}>
      <nav className={s.menuNav}>
        <CloseButton />
        <ul className={s.list}>
          {links.map((link, i) => (
            <ListElement key={i} {...link} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export { Menu };
