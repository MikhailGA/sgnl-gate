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
    navigate(AppRoutes.FOLDERS);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
      <Box sx={{ mb: 6 }}>
        <WelcomeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
          Техническое интервью - SIGNAL
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Live-coding задание для технической оценки кандидатов
        </Typography>
      </Box>

      <Stack spacing={4}>
        <Stack spacing={3}>
          <Card sx={{ p: 4, textAlign: 'left' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CodeIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Регламент интервью
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Данное тестовое задание является частью технического
                собеседования в компанию SIGNAL. Вам предстоит
                продемонстрировать навыки разработки в режиме live-coding.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Время выполнения:</strong> 1 - 1.5 часа
                <br />
                <strong>Разрешенные инструменты:</strong> любые на ваше
                усмотрение
                <br />
                <strong>Взаимодействие:</strong> вы можете задавать уточняющие
                вопросы по задаче и обсуждать нюансы реализации с интервьюером
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ p: 4, textAlign: 'left' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Технологический стек
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • <strong>React</strong> - библиотека для создания
                пользовательских интерфейсов
                <br />• <strong>TypeScript</strong> - типизированный JavaScript
                <br />• <strong>Effector</strong> - библиотека для управления
                состоянием
                <br />• <strong>Material-UI (MUI)</strong> - компоненты и стили
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ p: 4, textAlign: 'left' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Критерии оценки
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • <strong>Архитектурные решения:</strong> понимание паттернов
                проектирования, декомпозиция задач
                <br />• <strong>Качество кода:</strong> чистота, читаемость,
                следование принципам SOLID
                <br />• <strong>Типизация:</strong> эффективное использование
                TypeScript для безопасности типов
                <br />• <strong>Работа с состоянием:</strong> правильное
                использование Effector для управления данными
                <br />• <strong>Подход к решению:</strong> анализ задачи,
                планирование, итеративная разработка
                <br />• <strong>Коммуникация:</strong> способность объяснить
                решения и обсудить альтернативы
              </Typography>
            </CardContent>
          </Card>
        </Stack>

        <Box sx={{ pt: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleStartTasks}
            sx={{ px: 4, py: 2, fontSize: '1.1rem' }}
          >
            Начать задание
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
