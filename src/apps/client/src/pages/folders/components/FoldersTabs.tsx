import * as React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { RootFolderDto } from '@client/shared/api';

interface FoldersTabsProps {
  rootFolders: RootFolderDto[];
  activeTab: string;
  onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const FoldersTabs: React.FC<FoldersTabsProps> = ({
  rootFolders,
  activeTab,
  onTabChange,
}) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
      <Tabs value={activeTab} onChange={onTabChange} aria-label="folder tabs">
        {rootFolders.map((folder) => (
          <Tab
            key={folder.id}
            label={folder.name}
            value={String(folder.id)}
            icon={<FolderIcon />}
            iconPosition="start"
          />
        ))}
      </Tabs>
    </Box>
  );
};
