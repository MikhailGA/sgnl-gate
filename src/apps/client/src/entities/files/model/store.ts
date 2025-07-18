import { createEffect, createEvent, restore } from 'effector';
import { createGate } from 'effector-react';

//Gates
export const FilesGate = createGate<void>();

// Effects
export const getFilesFx = createEffect(() => {
  return [1, 2, 3, 4];
});

type FileUploadDto = { file: File };
const uploadFile = ({ file }: FileUploadDto) => {
  return Promise.resolve();
};

export const uploadFileFx = createEffect(uploadFile);
export const uploadFilesFx = createEffect((payload: FileUploadDto[]) => {
  return Promise.all(payload.map(uploadFileFx));
});

export const $files = restore(getFilesFx, []);
