import * as React from 'react';
import { Box, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

interface FoldersHeaderProps {
  title?: string;
}

export const FoldersHeader: React.FC<FoldersHeaderProps> = ({
  title = 'Folder Structure Tasks',
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
      <FolderIcon sx={{ mr: 2, color: 'primary.main', fontSize: 32 }} />
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
    </Box>
  );
};
