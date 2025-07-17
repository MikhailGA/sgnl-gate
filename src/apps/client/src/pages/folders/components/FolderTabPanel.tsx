import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { RootFolderDto } from '@client/shared/api';

interface FolderTabPanelProps {
  folder: RootFolderDto;
  isActive: boolean;
  children?: React.ReactNode;
}

export const FolderTabPanel: React.FC<FolderTabPanelProps> = ({
  folder,
  isActive,
  children,
}) => {
  return (
    <Box
      role="tabpanel"
      hidden={!isActive}
      sx={{ display: isActive ? 'block' : 'none' }}
    >
      {children || (
        <>
          <Typography variant="h6" gutterBottom>
            Содержимое папки: {folder.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Здесь будет отображаться содержимое папки с ID: {folder.id}
          </Typography>
        </>
      )}
    </Box>
  );
};
