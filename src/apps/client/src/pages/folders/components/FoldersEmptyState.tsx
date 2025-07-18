import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { FoldersHeader } from './FoldersHeader';

interface FoldersEmptyStateProps {
  message?: string;
}

export const FoldersEmptyState: React.FC<FoldersEmptyStateProps> = ({
  message = 'No available folders',
}) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto' }}>
      <FoldersHeader />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};
