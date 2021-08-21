import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Icon,
  IconButton,
  Divider,
} from '@material-ui/core';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useStyles } from './styles';

const ImageEditor = ({
  rowImageFile,
  showImageEditor,
  setShowImageEditor,
  onImageCrop,
  setCropper,
  options,
}) => {
  const classes = useStyles();
  return (
    <Dialog maxWidth='sm' disableBackdropClick fullWidth open={showImageEditor}>
      <DialogTitle>
        <Box className={classes.cropperActionButtonContainer}>
          <Box>Set Image</Box>
          <Box>
            <IconButton onClick={() => setShowImageEditor(false)}>
              <Icon className={classes.close}>close_icon</Icon>
            </IconButton>
            <IconButton onClick={onImageCrop}>
              <Icon className={classes.done}>done_icon</Icon>
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box
          className={
            options.shape === 'circle' ? classes.circleCropperContainer : ''
          }
        >
          <Cropper
            initialAspectRatio={
              options.shape === 'rect' ? 2 : options.shape === 'circle' ? 1 : 1
            }
            viewMode={1}
            src={rowImageFile && rowImageFile[0].dataURL}
            onInitialized={instance => {
              setCropper(instance);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ImageEditor;
