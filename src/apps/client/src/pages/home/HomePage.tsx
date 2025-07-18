import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TaskIcon from '@mui/icons-material/Assignment';
import { FolderTask } from './components';

export default function HomePage() {
  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', p: 4 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <TaskIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
          Tasks
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Select a task to perform
        </Typography>
      </Box>

      <Stack spacing={3}>
        <FolderTask />
      </Stack>
    </Box>
  );
}
