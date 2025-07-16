import { ReactNode } from 'react';
import { AppRoutePath } from '../config';

export interface MenuListItem {
  text: string;
  icon: ReactNode;
  path: AppRoutePath;
}
