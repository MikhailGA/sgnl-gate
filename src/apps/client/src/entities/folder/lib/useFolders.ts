import { useGate, useUnit } from 'effector-react';
import {
  $rootFolders,
  $folderTree,
  FolderTreeGate,
  RootFoldersGate,
} from '../model';

export const useRootFolders = () => {
  useGate(RootFoldersGate);
  return useUnit($rootFolders);
};

export const useFolderTree = (rootId: number) => {
  useGate(FolderTreeGate);
  return useUnit($folderTree);
};
