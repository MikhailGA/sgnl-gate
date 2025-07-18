import { useGate, useUnit } from 'effector-react';
import { FilesGate, $files, getFilesFx } from '../model';

export const useFiles = () => {
  useGate(FilesGate);
  const files = useUnit($files);
  const loading = useUnit(getFilesFx.pending);
  return { files, loading };
};
