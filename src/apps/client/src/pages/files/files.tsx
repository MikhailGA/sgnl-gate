import { FilesEntity } from '@client/entities';
import { Box, Divider, Link, List, ListItem, Stack } from '@mui/material';

import { UploadDropZone } from '@client/shared/ui';
import { Task } from './Task';

export default function FilesPage() {
  const { files, loading } = FilesEntity.useFiles();

  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto' }}>
      <Task />
      <Stack divider={<Divider />} spacing={1}>
        <UploadDropZone onDrop={console.log}>
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
          {files.map((_, index) => (
            <ListItem key={index}>{index}</ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
}
