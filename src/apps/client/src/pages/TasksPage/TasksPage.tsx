import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

export default function TasksPage() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <AssignmentRoundedIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Задачи
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Управление задачами
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Здесь будет список задач и их управление.
        </Typography>
      </Paper>
    </Box>
  );
}
