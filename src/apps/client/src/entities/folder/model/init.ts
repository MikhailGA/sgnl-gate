import { sample } from 'effector';
import {
  FolderTreeGate,
  RootFoldersGate,
  fetchFolderTreeFx,
  fetchRootFoldersFx,
} from './store';

sample({
  clock: RootFoldersGate.open,
  target: fetchRootFoldersFx,
});

sample({
  clock: FolderTreeGate.state,
  filter: (clk) => !!clk.rootId,
  target: fetchFolderTreeFx,
});
