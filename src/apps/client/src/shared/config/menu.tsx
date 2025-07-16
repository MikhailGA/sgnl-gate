import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
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
    text: 'Аналитика',
    icon: <AnalyticsRoundedIcon />,
    path: AppRoutes.ANALYTICS,
  },
  {
    text: 'Клиенты',
    icon: <PeopleRoundedIcon />,
    path: AppRoutes.CLIENTS,
  },
  {
    text: 'Задачи',
    icon: <AssignmentRoundedIcon />,
    path: AppRoutes.TASKS,
  },
];
