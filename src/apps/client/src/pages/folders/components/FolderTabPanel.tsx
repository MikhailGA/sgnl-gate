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
            Folder content: {folder.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is where the folder content with ID: {folder.id} will be
            displayed
          </Typography>
        </>
      )}
    </Box>
  );
};
