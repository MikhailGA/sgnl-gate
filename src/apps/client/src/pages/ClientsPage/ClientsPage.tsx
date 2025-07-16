import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

export default function ClientsPage() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <PeopleRoundedIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Клиенты
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Управление клиентами
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Здесь будет список клиентов и управление ими.
        </Typography>
      </Paper>
    </Box>
  );
}
