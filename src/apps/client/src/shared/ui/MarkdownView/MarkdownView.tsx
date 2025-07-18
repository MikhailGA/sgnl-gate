import { Box, BoxProps } from '@mui/material';
import clsx from 'clsx';
import 'github-markdown-css/github-markdown.css';
import Markdown, { Options as MarkdownProps } from 'react-markdown';
export type MarkdownViewProps = { boxProps?: BoxProps } & MarkdownProps;

export const MarkdownView = ({ boxProps, ...props }: MarkdownViewProps) => {
  return (
    <Box
      {...boxProps}
      sx={{
        ...boxProps?.sx,
        '--bgColor-default': 'transparent',
      }}
      className={clsx(boxProps?.className, 'markdown-body')}
    >
      <Markdown
        {...props}
        components={{
          a: ({ node, ...props }) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      />
    </Box>
  );
};
