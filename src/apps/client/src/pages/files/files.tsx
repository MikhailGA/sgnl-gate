import { FilesEntity } from '@client/entities';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import {
  Box,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from '@mui/material';

import { UploadDropZone } from '@client/shared/ui';
import { getFormatFileSize } from '@client/shared/utils';
import { Task } from './Task';
import { UploadProgress } from './UploadProgress';
import { FileFeature } from '@client/features';
import React from 'react';

export default function FilesPage() {
  const { files, loading } = FilesEntity.useFiles();

  return (
    <Box
      position={'relative'}
      sx={{ width: '100%', maxWidth: 1000, mx: 'auto' }}
    >
      <Task />
      <IconButton
        sx={{ position: 'absolute', zIndex: 1 }}
        color="error"
        disabled={!files.length}
        onClick={(e) => {
          e.stopPropagation();
          FilesEntity.deleteFilesFx({
            ids: (files ?? []).map(({ id }) => id),
          });
        }}
      >
        <DeleteIcon />
      </IconButton>
      <Stack divider={<Divider />} spacing={1}>
        <UploadDropZone
          onDrop={(files) => {
            FilesEntity.uploadFilesFx(
              files.map((file) => ({
                file,
                onUploadProgress: ({ loaded }) =>
                  FileFeature.Upload.Model.updateState({
                    name: file.name,
                    progress: loaded,
                  }),
              })),
            );
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            m="auto"
            width="100%"
            height={200}
            bgcolor="#f2f8ff"
          >
            <Link>Drop files or click here</Link>
          </Box>
        </UploadDropZone>

        <List>
          {files.map(({ id, name, size, createdAt }, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon />
                </ListItemIcon>
                <Stack width="100%" spacing={1} useFlexGap direction="row">
                  <Typography variant="body1" color="textSecondary">
                    {name}
                  </Typography>
                  <Typography ml="auto" variant="body1" color="textSecondary">
                    {getFormatFileSize(size)}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {new Date(createdAt).toISOString().split('T')[0]}
                  </Typography>
                </Stack>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
      <UploadProgress />
    </Box>
  );
}
