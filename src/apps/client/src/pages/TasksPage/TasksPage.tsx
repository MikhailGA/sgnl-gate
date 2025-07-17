import * as React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  LinearProgress,
  Divider,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import CodeIcon from '@mui/icons-material/Code';
import TimerIcon from '@mui/icons-material/Timer';

export default function TasksPage() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <FolderIcon sx={{ mr: 2, color: 'primary.main', fontSize: 32 }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Задачи по структуре папок
        </Typography>
      </Box>

      <Stack spacing={3}>
        {/* Progress indicator */}
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Прогресс выполнения
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <LinearProgress
              variant="determinate"
              value={0}
              sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
            />
            <Typography variant="body2" color="text.secondary">
              0/5 выполнено
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Время на выполнение:{' '}
            <TimerIcon sx={{ fontSize: 16, verticalAlign: 'middle' }} /> 45
            минут
          </Typography>
        </Card>

        <Divider />

        {/* Task template cards */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Список задач
        </Typography>

        {[1, 2, 3, 4, 5].map((taskNum) => (
          <Card
            key={taskNum}
            sx={{ transition: 'all 0.2s', '&:hover': { boxShadow: 4 } }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  mb: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CodeIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Задача {taskNum}
                  </Typography>
                </Box>
                <Chip
                  label="Не начато"
                  size="small"
                  color="default"
                  variant="outlined"
                />
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Описание задачи будет здесь. Задача связана с работой со
                структурой папок и TypeScript.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="TypeScript" size="small" variant="outlined" />
                <Chip
                  label="Структуры данных"
                  size="small"
                  variant="outlined"
                />
                <Chip label="Папки" size="small" variant="outlined" />
              </Box>
            </CardContent>
          </Card>
        ))}

        {/* Instructions card */}
        <Card sx={{ backgroundColor: 'action.hover' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Инструкции
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Внимательно прочитайте условие каждой задачи
              <br />
              • Используйте знания TypeScript для решения
              <br />
              • Обратите внимание на структуру папок и иерархию
              <br />• При необходимости обращайтесь к документации
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
