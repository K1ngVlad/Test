'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useMenu } from '@/hooks';
import s from './ListElement.module.scss';

interface Props {
  text: string;
  href: string;
}

const ListElement: FC<Props> = ({ text, href }) => {
  const { toggleMenu } = useMenu();
  return (
    <li className={s.listElement}>
      <Link onClick={toggleMenu} className={s.link} href={href}>
        {text}
      </Link>
    </li>
  );
};

export { ListElement };
