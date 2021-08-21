import React, { useRef } from 'react';
import Cropper from 'react-easy-crop';
import { Box, Card, Icon, IconButton, Input } from '@material-ui/core';
import { useStyles } from './styles';

const ImageUpload = ({
  rowImageFile,
  crop,
  setCrop,
  zoom,
  setZoom,
  setCroppedArea,
  handleInputChange,
  options,
}) => {
  const classes = useStyles();
  const inputRef = useRef();

  const handleFileSelect = () => {
    return inputRef.current.click();
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <Box component={Card} className={classes.imageUploadContainer}>
      {rowImageFile ? (
        <Box className={classes.cropContainer}>
          <Cropper
            classes={{ containerClassName: classes.mainCropContainer }}
            image={rowImageFile.dataUrl}
            crop={crop}
            zoom={zoom}
            aspect={options.aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            cropShape={options.cropShape}
            showGrid={options.showGrid}
          />
        </Box>
      ) : (
        <Box className={classes.defaultImageContainer}>
          <Icon className={classes.defaultImage}>business_outlined</Icon>
        </Box>
      )}

      <Box component={Card} raised className={classes.cameraIcon}>
        <Input
          classes={{ root: classes.rowInput }}
          inputRef={inputRef}
          type='file'
          onChange={handleInputChange}
        />

        <IconButton onClick={handleFileSelect}>
          <Icon>add_a_photo_outlined</Icon>
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageUpload;
