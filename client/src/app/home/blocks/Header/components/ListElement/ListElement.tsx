import Link from 'next/link';
import { FC } from 'react';

import s from './ListElement.module.scss';

interface Props {
  text: string;
  href: string;
}

const ListElement: FC<Props> = ({ text, href }) => {
  return (
    <li className={s.ListElement}>
      <Link className={s.link} href={href}>
        {text}
      </Link>
    </li>
  );
};

export { ListElement };
