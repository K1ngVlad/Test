'use client';

import { FC } from 'react';
import Image from 'next/image';
import { useMenu } from '@/hooks';

import menuSvg from '@/assets/svg/menu.svg';

import s from './MenuButton.module.scss';

const MenuButton: FC = () => {
  const { toggleMenu } = useMenu();
  return (
    <button aria-label="open menu" onClick={toggleMenu} className={s.button}>
      <Image className={s.img} alt="open menu" src={menuSvg} />
    </button>
  );
};

export { MenuButton };
