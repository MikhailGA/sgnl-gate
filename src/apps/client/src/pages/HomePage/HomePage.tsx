import * as React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Paper,
  Stack,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Api } from '../../shared/api/ApiClient';

export default function HomePage() {
  React.useEffect(function test() {
    Api.instance.appApi.appControllerCheckDatabase().then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <Box sx={{ width: '100%', maxWidth: 1200 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <HomeRoundedIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Главная страница
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Card sx={{ flex: '1 1 200px', minWidth: 200 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Статистика
              </Typography>
              <Typography variant="h3" color="primary">
                1,234
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Общее количество записей
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ flex: '1 1 200px', minWidth: 200 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Активные
              </Typography>
              <Typography variant="h3" color="success.main">
                856
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Активные элементы
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ flex: '1 1 200px', minWidth: 200 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                В ожидании
              </Typography>
              <Typography variant="h3" color="warning.main">
                245
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ожидающие обработки
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ flex: '1 1 200px', minWidth: 200 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Ошибки
              </Typography>
              <Typography variant="h3" color="error.main">
                12
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Элементы с ошибками
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Добро пожаловать в SGNL Gate
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Это главная страница вашего приложения. Здесь вы можете увидеть
            общую статистику и быстро перейти к основным функциям системы.
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
}
