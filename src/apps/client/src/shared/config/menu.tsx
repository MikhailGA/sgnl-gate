import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import { MenuListItem } from '../types';
import { AppRoutes } from './routes';

export const mainListItems: MenuListItem[] = [
  {
    text: 'Home',
    icon: <HomeRoundedIcon />,
    path: AppRoutes.HOME,
  },
  {
    text: 'Folders',
    icon: <FolderRoundedIcon />,
    path: AppRoutes.FOLDERS,
  },
];
