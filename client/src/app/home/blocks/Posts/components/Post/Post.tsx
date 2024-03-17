import { FC } from 'react';

import s from './Post.module.scss';

interface Props {
  title: string;
}

const Post: FC<Props> = ({ title }) => {
  return (
    <article className={s.post}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.data}>
        <time className={s.time} dateTime="2020-02-12">
          12 Feb 2020
        </time>
        <p className={s.category}>Design, Pattern</p>
      </div>
      <p className={s.text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </article>
  );
};

export { Post };
