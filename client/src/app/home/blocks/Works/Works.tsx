import { FC } from 'react';

import { works } from './constants';
import { Work } from './components';

import s from './Works.module.scss';

const Works: FC = () => {
  return (
    <section className={s.works}>
      <div className={s.container}>
        <h2 className={s.title}>Featured works</h2>
        <div className={s.worksBlock}>
          {works.map((work, i) => (
            <Work key={i} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Works };
