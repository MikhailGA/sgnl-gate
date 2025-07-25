import { MarkdownView } from '@client/shared/ui';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Drawer, IconButton, Stack } from '@mui/material';
import { useState } from 'react';

type Props = {
  requirements: { ru: string; en: string };
};
export const RequirementsSidebar = ({ requirements }: Props) => {
  const [en, setEn] = useState(true);
  const [open, setOpen] = useState(true);
  return (
    <>
      <Drawer
        sx={{ width: 200 }}
        anchor="right"
        open={open}
        variant="persistent"
      >
        <Stack spacing={1} px={2} py={1} width={400}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={() => setOpen((s) => !s)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <MarkdownView>{en ? requirements.en : requirements.ru}</MarkdownView>
        </Stack>
      </Drawer>
      <IconButton
        sx={{ position: 'absolute', top: 8, right: 8, zIndex: 100 }}
        onClick={() => setOpen((s) => !s)}
      >
        <QuestionMarkIcon />
      </IconButton>
    </>
  );
};
