import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { RootFolderDto } from '@client/shared/api';
import { FoldersFilteredTree, FoldersTree } from './FolderTree';

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
        <Stack direction="row" mt={3} spacing={3}>
          <FoldersTree id={folder.id} />
          <FoldersFilteredTree id={folder.id} />
        </Stack>
      )}
    </Box>
  );
};
