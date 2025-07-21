import { Api, DeleteFileDto } from '@client/shared/api';
import { AxiosProgressEvent } from 'axios';
import { createEffect, restore } from 'effector';
import { createGate } from 'effector-react';

//Gates
export const FilesGate = createGate<void>();

// Effects
export const getFilesFx = createEffect(() => {
  return Api.instance.filesApi.fileControllerFindAll().then((r) => r.data);
});

export const deleteFilesFx = createEffect((args: DeleteFileDto) => {
  return Api.instance.filesApi.fileControllerDelete(args).then((r) => r.data);
});

type FileUploadDto = {
  file: File;
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void;
};

const uploadFile = ({ file, onUploadProgress }: FileUploadDto) => {
  return Api.instance.filesApi
    .fileControllerUploadFile(file, {
      onUploadProgress,
    })
    .then(({ data }) => data)
    .then(({ id }) => {
      Api.instance.filesApi.fileControllerCreate({
        name: file.name,
        objectId: id,
        size: file.size,
      });
    });
};

export const uploadFileFx = createEffect(uploadFile);
export const uploadFilesFx = createEffect((payload: FileUploadDto[]) => {
  return Promise.all(payload.map(uploadFileFx));
});

export const $files = restore(getFilesFx, []);
