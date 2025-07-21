import { FilesEntity } from '@client/entities';
import { sample } from 'effector';
import { addFile, updateState } from './model';

sample({
  clock: FilesEntity.uploadFileFx,
  fn: ({ file }) => ({
    name: file.name,
    size: file.size,
    progress: 0,
    // state: 'idle' as const,
  }),
  target: addFile,
});

sample({
  clock: FilesEntity.uploadFileFx.done,
  fn: ({ params: { file } }) => ({
    name: file.name,
    progress: file.size,
    // state: 'idle' as const,
  }),
  target: updateState,
});
