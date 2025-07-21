import { createEvent, createStore } from 'effector';
import { useUnit } from 'effector-react';

export type UFile = {
  name: string;
  size: number;
  progress: number;
  // state: 'idle';
};
export type UploadingState = Record<string, UFile>;

export const addFile = createEvent<UFile>();
export const updateState = createEvent<Omit<UFile, 'size'>>();

export const $uploadingState = createStore<UploadingState>({})
  .on(addFile, (s, payload) => ({ ...s, [payload.name]: payload }))
  .on(updateState, (s, { name, progress }) => ({
    ...s,
    [name]: { ...s[name], progress },
  }));

export const useUploading = () => {
  const state = useUnit({ uploadingState: $uploadingState });

  return { ...state, updateState, reset: $uploadingState.reinit };
};
