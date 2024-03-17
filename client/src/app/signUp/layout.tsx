import { NotAuthorizedRoute } from '@/HOC';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SignUpLayout(props: Props) {
  return <NotAuthorizedRoute>{props.children}</NotAuthorizedRoute>;
}
