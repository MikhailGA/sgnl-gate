import * as React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { FoldersHeader } from './FoldersHeader';

export const FoldersLoader: React.FC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto' }}>
      <FoldersHeader />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    </Box>
  );
};
