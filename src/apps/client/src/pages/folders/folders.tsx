import * as React from 'react';
import { Box } from '@mui/material';
import { FolderEntity } from '@client/entities';
import {
  FoldersHeader,
  FoldersLoader,
  FoldersEmptyState,
  FoldersTabs,
  FolderTabPanel,
} from './components';
import { useFolderTabs } from './hooks';

export default function FoldersPage() {
  const { rootFolders, loading } = FolderEntity.useRootFolders();
  const { activeTab, handleTabChange } = useFolderTabs({
    rootFolders,
    loading,
  });

  if (loading) {
    return <FoldersLoader />;
  }

  if (rootFolders.length === 0) {
    return <FoldersEmptyState />;
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto' }}>
      <FoldersHeader />

      <FoldersTabs
        rootFolders={rootFolders}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <Box sx={{ mt: 3 }}>
        {rootFolders.map((folder) => (
          <FolderTabPanel
            key={folder.id}
            folder={folder}
            isActive={activeTab === String(folder.id)}
          />
        ))}
      </Box>
    </Box>
  );
}
