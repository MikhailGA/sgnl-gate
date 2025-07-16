import { Theme, Components } from '@mui/material/styles';

export const surfacesCustomizations: Components<Theme> = {
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
      },
    },
  },
};
