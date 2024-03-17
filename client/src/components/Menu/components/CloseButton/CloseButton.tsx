'use client';

import { FC } from 'react';
import Image from 'next/image';

import { useMenu } from '@/hooks';
import crossImg from '@/assets/svg/cross.svg';

import s from './CloseButton.module.scss';

const CloseButton: FC = () => {
  const { toggleMenu } = useMenu();
  return (
    <button className={s.button} onClick={toggleMenu} aria-label="close menu">
      <Image className={s.img} alt="close menu" src={crossImg} />
    </button>
  );
};

export { CloseButton };
