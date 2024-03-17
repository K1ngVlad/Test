import { FC } from 'react';
import Image from 'next/image';

import avatarImg from '@/assets/img/avatar.png';

import s from './Avatar.module.scss';

const Avatar: FC = () => {
  return (
    <div className={s.avatar}>
      <Image priority className={s.img} alt="avatar" src={avatarImg} />
      <div className={s.ellipse}></div>
    </div>
  );
};

export { Avatar };
