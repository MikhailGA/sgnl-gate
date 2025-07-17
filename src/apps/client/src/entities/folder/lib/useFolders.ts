import { useGate, useUnit } from 'effector-react';
import {
  $rootFolders,
  $folderTree,
  FolderTreeGate,
  RootFoldersGate,
  fetchRootFoldersFx,
  fetchFolderTreeFx,
} from '../model';

export const useRootFolders = () => {
  useGate(RootFoldersGate);
  const rootFolders = useUnit($rootFolders);
  const loading = useUnit(fetchRootFoldersFx.pending);
  return { rootFolders, loading };
};

export const useFolderTree = (rootId: number) => {
  useGate(FolderTreeGate, { rootId });
  const folderTree = useUnit($folderTree);
  const loading = useUnit(fetchFolderTreeFx.pending);
  return { folderTree, loading };
};
