import { FolderEntity } from '@client/entities';
import { FolderDto } from '@client/shared/api';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import FolderIcon from '@mui/icons-material/Folder';
import { PropsWithChildren } from 'react';
type Props = { id: number };

const TreeWrapper = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <Stack width={400} spacing={1}>
      <Typography variant="h4">{title}</Typography>
      {children}
    </Stack>
  );
};
export const FoldersTree = ({ id }: Props) => {
  const { folderTree, loading } = FolderEntity.useFolderTree(id);
  if (loading) return <CircularProgress />;
  if (!folderTree) return null;

  return (
    <TreeWrapper title="Original tree">
      <SimpleTreeView
        defaultExpandedItems={[
          String(folderTree.id),
          ...folderTree.children.map(({ id }) => String(id)),
        ]}
      >
        <RenderTree folder={folderTree} />
      </SimpleTreeView>
    </TreeWrapper>
  );
};

export const FoldersFilteredTree = ({ id }: Props) => {
  const { folderTree, loading } = FolderEntity.useFolderTree(id);
  if (loading) return <CircularProgress />;
  if (!folderTree) return null;

  return (
    <TreeWrapper title="Filtered tree">
      <SimpleTreeView
        defaultExpandedItems={[
          String(folderTree.id),
          ...folderTree.children.map(({ id }) => String(id)),
        ]}
      >
        <RenderTree folder={folderTree} />
      </SimpleTreeView>
    </TreeWrapper>
  );
};

const RenderTree = ({ folder }: { folder: FolderDto }) => {
  return (
    <TreeItem
      itemId={String(folder.id)}
      label={
        <Stack direction="row">
          <FolderIcon color={folder.permissions ? 'primary' : 'error'} />
          <Typography>{folder.name}</Typography>
        </Stack>
      }
    >
      {folder.children.map((children) => (
        <RenderTree key={children.id} folder={children} />
      ))}
    </TreeItem>
  );
};
