import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import { MenuListItem } from '../types';
import { AppRoutes } from './routes';

export const mainListItems: MenuListItem[] = [
  {
    text: 'Главная',
    icon: <HomeRoundedIcon />,
    path: AppRoutes.HOME,
  },
  {
    text: 'Папки',
    icon: <FolderRoundedIcon />,
    path: AppRoutes.FOLDERS,
  },
];
