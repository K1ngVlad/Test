import { AuthorizedRoute } from '@/HOC';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function HomeLayout(props: Props) {
  return <AuthorizedRoute>{props.children}</AuthorizedRoute>;
}
