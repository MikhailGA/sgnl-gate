import * as React from 'react';
import { Outlet } from 'react-router';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { AppTheme } from '../../shared/ui/AppTheme';
import { SideMenu } from '../../shared/ui';
import { mainListItems } from '../../shared/config';

interface LayoutProps {
  disableCustomTheme?: boolean;
}

export default function Layout({ disableCustomTheme }: LayoutProps) {
  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu mainListItems={mainListItems} />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
            minHeight: '100vh',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 2 },
              px: { xs: 2, md: 0 },
            }}
          >
            <Outlet />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
