import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import { MenuListItem } from '../types';
import { AppRoutes } from './routes';

export const mainListItems: MenuListItem[] = [
  {
    text: 'Главная',
    icon: <HomeRoundedIcon />,
    path: AppRoutes.HOME,
  },
  {
    text: 'Задачи',
    icon: <AssignmentRoundedIcon />,
    path: AppRoutes.TASKS,
  },
];
