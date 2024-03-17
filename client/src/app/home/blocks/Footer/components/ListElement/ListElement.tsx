import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import s from './ListElement.module.scss';

interface Props {
  href: string;
  img: StaticImageData;
}

const ListElement: FC<Props> = ({ href, img }) => {
  return (
    <li>
      <Link href={href}>
        <Image className={s.img} alt={href} src={img} />
      </Link>
    </li>
  );
};

export { ListElement };
