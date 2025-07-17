import * as React from 'react';
import { useSearchParams } from 'react-router';
import { RootFolderDto } from '@client/shared/api';

interface UseFolderTabsProps {
  rootFolders: RootFolderDto[];
  loading: boolean;
}

interface UseFolderTabsReturn {
  activeTab: string;
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const useFolderTabs = ({
  rootFolders,
  loading,
}: UseFolderTabsProps): UseFolderTabsReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab =
    searchParams.get('tab') ||
    (rootFolders.length > 0 ? String(rootFolders[0].id) : '');

  const handleTabChange = React.useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setSearchParams({ tab: newValue });
    },
    [setSearchParams],
  );

  // Set default tab if not set and folders are loaded
  React.useEffect(() => {
    if (!loading && rootFolders.length > 0 && !searchParams.get('tab')) {
      setSearchParams({ tab: String(rootFolders[0].id) });
    }
  }, [loading, rootFolders, searchParams, setSearchParams]);

  return {
    activeTab,
    handleTabChange,
  };
};
