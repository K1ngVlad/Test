import { FC } from 'react';

import { links } from './constants';
import { ListElement } from './components';

import s from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.list}>
        {links.map((link, i) => (
          <ListElement key={i} {...link} />
        ))}
      </ul>
      <p className={s.text}>Copyright ©2020 All rights reserved </p>
    </footer>
  );
};

export { Footer };
