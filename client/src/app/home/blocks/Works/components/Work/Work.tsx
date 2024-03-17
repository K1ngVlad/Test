import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import s from './Work.module.scss';

interface Props {
  title: string;
  year: number;
  category: string;
  img: StaticImageData;
  priority?: boolean;
}

const Work: FC<Props> = (props) => {
  const { title, year, category, img, priority } = props;
  return (
    <article className={s.work}>
      <Image priority={priority} className={s.img} alt={category} src={img} />
      <div className={s.rightBlock}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.data}>
          <time className={s.time} dateTime={String(year)}>
            {year}
          </time>
          <p className={s.category}>{category}</p>
        </div>
        <p className={s.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </article>
  );
};

export { Work };
