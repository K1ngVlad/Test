import { StaticImageData } from 'next/image';

import facebookImg from '@/assets/svg/facebook.svg';
import instagrammImg from '@/assets/svg/instagram.svg';
import twitterImg from '@/assets/svg/twitter.svg';
import linkedInImg from '@/assets/svg/linkedIn.svg';

interface Link {
  href: string;
  img: StaticImageData;
}

const links: Link[] = [
  {
    href: '/home',
    img: facebookImg,
  },
  {
    href: '/home',
    img: instagrammImg,
  },
  {
    href: '/home',
    img: twitterImg,
  },
  {
    href: '/home',
    img: linkedInImg,
  },
];

export { links };
