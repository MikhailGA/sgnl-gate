import { Theme, Components } from '@mui/material/styles';

export const navigationCustomizations: Components<Theme> = {
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: 'none',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        margin: '4px 8px',
        '&.Mui-selected': {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        },
      },
    },
  },
};
