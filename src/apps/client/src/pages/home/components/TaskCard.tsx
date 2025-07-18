import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router';

interface TaskCardProps {
  title: string;
  description: string;
  route: string;
  buttonText?: string;
}

export function TaskCard({
  title,
  description,
  route,
  buttonText = 'Go to task',
}: TaskCardProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(route);
  };

  return (
    <Card sx={{ p: 3, textAlign: 'left' }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            onClick={handleNavigate}
            sx={{ px: 3, py: 1 }}
          >
            {buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
