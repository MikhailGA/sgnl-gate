import { sample } from 'effector';
import { FilesGate, getFilesFx, uploadFileFx, $files } from './store';

sample({
  clock: [FilesGate.open, uploadFileFx.doneData],
  target: getFilesFx,
});

sample({
  clock: FilesGate.close,
  target: $files.reinit,
});
