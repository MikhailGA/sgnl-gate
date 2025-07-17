import * as React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from '@mui/material';
import WelcomeIcon from '@mui/icons-material/WavingHand';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate } from 'react-router';
import { AppRoutes } from '../../shared/config';

export default function HomePage() {
  const navigate = useNavigate();

  const handleStartTasks = () => {
    navigate(AppRoutes.TASKS);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
      <Box sx={{ mb: 6 }}>
        <WelcomeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
          Добро пожаловать!
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Система тестирования знаний TypeScript
        </Typography>
      </Box>

      <Stack spacing={4}>
        <Card sx={{ p: 4, textAlign: 'left' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CodeIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                О приложении
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Данное приложение предназначено для тестирования ваших знаний
              TypeScript. Вам предстоит решить ряд задач, связанных с различными
              аспектами языка.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Работа со структурами данных и папками
              <br />
              • Типизация и интерфейсы
              <br />• Практические задачи программирования
            </Typography>
          </CardContent>
        </Card>

        <Box sx={{ pt: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleStartTasks}
            sx={{ px: 4, py: 2, fontSize: '1.1rem' }}
          >
            Начать тестирование
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
