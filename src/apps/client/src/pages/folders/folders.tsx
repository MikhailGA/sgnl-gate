import * as React from 'react';
import { Box, Drawer } from '@mui/material';
import { FolderEntity } from '@client/entities';
import {
  FoldersHeader,
  FoldersLoader,
  FoldersEmptyState,
  FoldersTabs,
  FolderTabPanel,
} from './components';
import { useFolderTabs } from './hooks';
import { Task } from './Task';

export default function FoldersPage() {
  const { rootFolders, loading } = FolderEntity.useRootFolders();
  const { activeTab, handleTabChange } = useFolderTabs({
    rootFolders,
    loading,
  });

  const selectedRoot = rootFolders.find(({ id }) => String(id) === activeTab);

  if (loading) {
    return <FoldersLoader />;
  }

  if (rootFolders.length === 0) {
    return <FoldersEmptyState />;
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto' }}>
      <Task></Task>
      <FoldersHeader />

      <FoldersTabs
        rootFolders={rootFolders}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <Box mt={3}>
        {selectedRoot && <FolderTabPanel folder={selectedRoot} isActive />}
      </Box>
    </Box>
  );
}
