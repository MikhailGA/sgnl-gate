import { FileFeature } from '@client/features';
import { getFormatFileSize } from '@client/shared/utils';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
export const UploadProgress = () => {
  const { uploadingState, reset } = FileFeature.Upload.Model.useUploading();

  return (
    <Slide in={!!Object.keys(uploadingState).length} direction="up">
      <Box
        boxShadow={3}
        borderRadius={2}
        overflow="hidden"
        bgcolor="white"
        position="fixed"
        right={400}
        bottom={0}
      >
        <Stack>
          <Stack
            px={2}
            py={1}
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            sx={{ backgroundColor: '#cee5ffff' }}
          >
            <Typography>Uploading</Typography>
            <IconButton onClick={() => reset()}>
              <CloseOutlinedIcon />
            </IconButton>
          </Stack>
          <Stack width={400} height={400} overflow="auto">
            <List>
              {Object.entries(uploadingState).map(
                ([key, { name, progress, size }], index) => {
                  return (
                    <ListItem sx={{ position: 'relative' }} key={name + index}>
                      <LinearProgress
                        sx={{
                          position: 'absolute',
                          inset: '0 0 0 0',
                          height: 'auto',
                          opacity: 0.5,
                        }}
                        variant="determinate"
                        value={(progress / size) * 100}
                      />
                      <Stack
                        width={'100%'}
                        direction="row"
                        justifyContent="space-between"
                        zIndex={1}
                      >
                        <Typography>{name}</Typography>
                        <Typography>{getFormatFileSize(size)}</Typography>
                      </Stack>
                    </ListItem>
                  );
                },
              )}
            </List>
          </Stack>
        </Stack>
      </Box>
    </Slide>
  );
};
