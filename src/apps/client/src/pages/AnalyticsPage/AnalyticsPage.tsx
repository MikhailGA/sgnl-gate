import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';

export default function AnalyticsPage() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <AnalyticsRoundedIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Аналитика
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Раздел аналитики
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Здесь будут размещены графики, диаграммы и отчеты.
        </Typography>
      </Paper>
    </Box>
  );
}
