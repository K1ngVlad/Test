import { useContext } from 'react';
import { MenuContext, MenuState } from '@/HOC';

const useMenu = (): MenuState => useContext(MenuContext);

export { useMenu };
