import { FC } from 'react';
import { Post } from './components';
import { posts } from './constants';
import Link from 'next/link';

import s from './Posts.module.scss';

const Posts: FC = () => {
  return (
    <section className={s.posts}>
      <div className={s.container}>
        <div className={s.titleBlock}>
          <h2 className={s.title}>Recent posts</h2>
          <Link className={s.link} href="/home">
            View all
          </Link>
        </div>

        <div className={s.postsBlock}>
          {posts.map((title, i) => (
            <Post title={title} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Posts };
