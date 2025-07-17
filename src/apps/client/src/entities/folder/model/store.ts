import { createEffect, restore, combine } from 'effector';
import { Api, FolderDto, RootFolderDto } from '@client/shared/api';
import { createGate } from 'effector-react';

//Gates
export const RootFoldersGate = createGate<void>();
export const FolderTreeGate = createGate<{ rootId: number }>();

// Effects
export const fetchRootFoldersFx = createEffect<void, RootFolderDto[], Error>(
  () =>
    Api.instance.folderApi
      .folderControllerGetRootFolders()
      .then((r) => r.data || []),
);

export const fetchFolderTreeFx = createEffect<
  { rootId: number },
  FolderDto | null,
  Error
>(({ rootId }) =>
  Api.instance.folderApi
    .folderControllerGetTreeByRootId(rootId)
    .then((r) => r.data || null),
);

export const $rootFolders = restore(fetchRootFoldersFx, []);
export const $folderTree = restore(fetchFolderTreeFx, null);

export const $loading = combine(
  fetchFolderTreeFx.pending,
  fetchRootFoldersFx.pending,
  (pending1, pending2) => pending1 || pending2,
);
