import { FC } from 'react';
import { Avatar } from './components';

import s from './Hero.module.scss';

const Hero: FC = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <Avatar />
        <div className={s.leftBlock}>
          <h1 className={s.title}>Hi, I am John, Creative Technologist</h1>
          <p className={s.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className={s.button}>Download Resume</button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
