import { StaticImageData } from 'next/image';

import dashboardImg from '@/assets/img/works/dashboard.png';
import illustrationImg from '@/assets/img/works/illustration.png';
import typographyImg from '@/assets/img/works/typography.png';

interface Work {
  title: string;
  year: number;
  category: string;
  img: StaticImageData;
  priority?: boolean;
}

const works: Work[] = [
  {
    title: 'Designing Dashboards',
    year: 2020,
    category: 'Dashboard',
    img: dashboardImg,
  },
  {
    title: 'Vibrant Portraits of 2020',
    year: 2018,
    category: 'Illustration',
    img: illustrationImg,
  },
  {
    title: '36 Days of Malayalam type',
    year: 2018,
    category: 'Typography',
    img: typographyImg,
    priority: true,
  },
];

export { works };
