import { Box, SxProps, Theme, styled } from '@mui/material';
import clsx from 'clsx';
import React, { ComponentProps, FC, PropsWithChildren } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

type OwnProps = {
  /**
   * Props will be passed to the container Box component
   */
  containerProps?: ComponentProps<typeof Box>;
  enable?: boolean;
  sx?: SxProps<Theme>;
};
export type UploadDropZoneProps = PropsWithChildren<DropzoneOptions & OwnProps>;

const classes = {
  UploadActive: 'UploadActive',
  Overlay: 'Overlay',
  Disable: 'Disable',
};

export const UploadDropZone: FC<UploadDropZoneProps> = ({
  containerProps = {},
  children,
  enable = true,
  sx,
  ...options
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone(options);

  return (
    <Container
      isDragActive={isDragActive}
      className={clsx(
        {
          [classes.UploadActive]: isDragActive,
          [classes.Disable]: !enable,
        },
        containerProps.className,
        getRootProps().className,
      )}
      {...containerProps}
      {...(enable ? getRootProps() : {})}
      sx={sx}
    >
      {enable && <input className="sr-only" {...getInputProps()} />}
      {children}
      <div className={classes.Overlay} />
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (prop) => {
    return !['isDragActive'].includes(prop as string);
  },
})<{ isDragActive: boolean }>(({ theme, isDragActive }) => ({
  position: 'relative',
  border: '2px dashed transparent',
  outline: 'none',
  transition: theme.transitions.create([
    'border-color',
    'opacity',
    'background-color',
  ]),
  [`&.${classes.Disable}`]: {
    border: '2px dashed transparent', //slightly annoying movement of the entire page when starting a search, so keep the indentation
  },
  [`.${classes.Overlay}`]: {
    visibility: 'hidden',
    opacity: 0,
    position: 'absolute',
    inset: 0,
    transition: theme.transitions.create([
      'border-color',
      'opacity',
      'background-color',
    ]),
    ...(isDragActive
      ? {
          visibility: 'visible',
          opacity: 0.2,
          backgroundColor: theme.palette.primary.light,
        }
      : {}),
  },
  [`&.${classes.UploadActive}`]: {
    borderColor: theme.palette.primary.main,
    [`.${classes.Overlay}`]: {
      visibility: 'visible',
      opacity: 0.2,
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
