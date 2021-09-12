import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import ImageField from '../../../../utilities/components/ImageField/ImageField';
import { dataURLtoFile } from '../../../../utilities/utility';

const HealthcareOrgsList = () => {
  const [rowImageFile, setRowImageFile] = useState(null);
  const [cropper, setCropper] = useState(null);
  const [croppedImageFile, setCroppedImageFile] = useState(null);

  const [showImageEditor, setShowImageEditor] = useState(false);

  const onImageCrop = () => {
    const croppedImageDataUrl = cropper.getCroppedCanvas().toDataURL();
    const croppedImageFileObject = dataURLtoFile(
      croppedImageDataUrl,
      rowImageFile[0].file.name
    );

    const data = {
      dataURL: croppedImageDataUrl,
      file: croppedImageFileObject,
    };

    console.log('row ==>', rowImageFile[0]);
    console.log('cropped ==>', data);
    setCroppedImageFile(data);
    setShowImageEditor(false);
  };

  const onImageRemove = () => {
    setCroppedImageFile(null);
  };

  return (
    <Box>
      <Typography>Healthcare Orgs List</Typography>

      <Grid container>
        <Grid item md={6}>
          <ImageField
            rowImageFile={rowImageFile}
            setRowImageFile={setRowImageFile}
            showImageEditor={showImageEditor}
            setShowImageEditor={setShowImageEditor}
            setCropper={setCropper}
            croppedImageFile={croppedImageFile}
            onImageCrop={onImageCrop}
            onImageRemove={onImageRemove}
            options={{
              shape: 'rect',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HealthcareOrgsList;
