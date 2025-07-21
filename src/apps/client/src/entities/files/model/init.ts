import { sample } from 'effector';
import {
  FilesGate,
  getFilesFx,
  uploadFileFx,
  deleteFilesFx,
  $files,
} from './store';

sample({
  clock: [FilesGate.open, uploadFileFx.doneData, deleteFilesFx.doneData],
  target: getFilesFx,
});

sample({
  clock: FilesGate.close,
  target: $files.reinit,
});
