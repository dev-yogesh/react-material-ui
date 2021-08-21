import React, { useState } from 'react';
import { Box, Card, Grid, TextField } from '@material-ui/core';
import { dataURLtoFile } from '../../../../utilities/utility';
// import { useStyles } from './styles';
import ImageField from '../../../../utilities/components/ImageField/ImageField';

const OrgsForm = () => {
  // const classes = useStyles();
  const [rowImageFile, setRowImageFile] = useState(null);
  const [cropper, setCropper] = useState(null);
  const [croppedImageFile, setCroppedImageFile] = useState(null);

  const [showImageEditor, setShowImageEditor] = useState(false);
  // const [croppedImageFile, setCroppedImageFile] = useState(null);
  // const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  // const [zoom, setZoom] = React.useState(1);
  // const [croppedArea, setCroppedArea] = React.useState(null);

  // const handleInputChange = async e => {
  //   try {
  //     const dataUrl = await fileToDataURL(e.target.files[0]);
  //     const fileData = {
  //       dataUrl,
  //       file: e.target.files[0],
  //     };
  //     setRowImageFile(fileData);
  //   } catch (error) {
  //     console.log('Error', error);
  //   }
  // };

  // const getCroppedImage = async () => {
  //   try {
  //     const croppedImageDataURL = await getCroppedImg(
  //       rowImageFile.dataUrl,
  //       croppedArea
  //     );
  //     const croppedImage = dataURLtoFile(croppedImageDataURL, 'image.jpeg');
  //     const fileData = {
  //       dataUrl: croppedImageDataURL,
  //       file: croppedImage,
  //     };
  //     setCroppedImageFile(fileData);
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
  // };

  // const onSubmit = async () => {
  //   console.log('submit');
  //   // try {
  //   //   const croppedImageDataURL = await getCroppedImg(
  //   //     rowImageFile.dataUrl,
  //   //     croppedArea
  //   //   );
  //   //   const croppedImage = dataURLtoFile(croppedImageDataURL, 'image.jpeg');
  //   //   const fileData = {
  //   //     dataUrl: croppedImageDataURL,
  //   //     file: croppedImage,
  //   //   };
  //   //   setCroppedImageFile(fileData);
  //   // } catch (error) {
  //   //   console.log('Error:', error);
  //   // }
  // };

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

  return (
    <Box>
      <Box component={Card} p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Box>
              <ImageField
                rowImageFile={rowImageFile}
                setRowImageFile={setRowImageFile}
                showImageEditor={showImageEditor}
                setShowImageEditor={setShowImageEditor}
                setCropper={setCropper}
                croppedImageFile={croppedImageFile}
                onImageCrop={onImageCrop}
                options={{
                  shape: 'rect',
                }}
              />
            </Box>
            {/* <Box>
              <ImageUploading
                value={rowImageFile}
                acceptType={['jpg', 'jpeg', 'webp', 'png']}
                maxFileSize={1000000}
                onChange={images => {
                  setRowImageFile(images);
                  setShowImageEditor(true);
                }}
              >
                {({ onImageUpload, isDragging, dragProps, errors }) => (
                  <>
                    <Box
                      onClick={onImageUpload}
                      {...dragProps}
                      style={
                        isDragging
                          ? {
                              borderColor: 'red',
                            }
                          : undefined
                      }
                      className={classes.imageUploadContainer}
                    >
                      {croppedImageFile ? (
                        <img
                          src={croppedImageFile.dataURL}
                          alt='profile'
                          height='100%'
                          width='100%'
                          style={{ borderRadius: '5px' }}
                        />
                      ) : (
                        <Box style={{ textAlign: 'center', padding: '1rem' }}>
                          <Typography variant='subtitle1'>
                            Drag image or click here
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    {errors && (
                      <div>
                        {errors.acceptType && (
                          <span>Your selected file type is not allow</span>
                        )}
                        {errors.maxFileSize && (
                          <span>Selected file size exceed maxFileSize</span>
                        )}
                      </div>
                    )}
                  </>
                )}
              </ImageUploading>
            </Box> */}

            {/* <Dialog
              maxWidth='sm'
              disableBackdropClick
              fullWidth
              open={showImageEditor}
            >
              <DialogTitle>
                <Box className={classes.cropperActionButtonContainer}>
                  <Box>Set Image</Box>
                  <Box>
                    <IconButton onClick={() => setShowImageEditor(false)}>
                      <Icon>close_icon</Icon>
                    </IconButton>
                    <IconButton onClick={onImageCrop}>
                      <Icon>done_icon</Icon>
                    </IconButton>
                  </Box>
                </Box>
              </DialogTitle>
              <Divider />
              <DialogContent>
                <Cropper
                  initialAspectRatio={16 / 9}
                  viewMode={1}
                  src={rowImageFile && rowImageFile[0].dataURL}
                  onInitialized={instance => {
                    setCropper(instance);
                  }}
                />
              </DialogContent>
            </Dialog> */}
          </Grid>

          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Description'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* <Box component={Card} p={2} mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Box>
              <ImageUploading
                value={rowImageFile}
                acceptType={['jpg', 'jpeg', 'webp', 'png']}
                maxFileSize={1000000}
                onChange={images => {
                  setRowImageFile(images);
                  setShowImageEditor(true);
                }}
              >
                {({ onImageUpload, isDragging, dragProps, errors }) => (
                  <>
                    <Box
                      onClick={onImageUpload}
                      {...dragProps}
                      style={
                        isDragging
                          ? {
                              borderColor: 'red',
                            }
                          : undefined
                      }
                      className={classes.imageUploadContainerUser}
                    >
                      {croppedImageFile ? (
                        <img
                          src={croppedImageFile.dataURL}
                          alt='profile'
                          height='100%'
                          width='100%'
                          style={{ borderRadius: '50%' }}
                        />
                      ) : (
                        <Box style={{ textAlign: 'center', padding: '1rem' }}>
                          <Typography variant='subtitle1'>
                            Drag image or click here
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    {errors && (
                      <div>
                        {errors.acceptType && (
                          <span>Your selected file type is not allow</span>
                        )}
                        {errors.maxFileSize && (
                          <span>Selected file size exceed maxFileSize</span>
                        )}
                      </div>
                    )}
                  </>
                )}
              </ImageUploading>
            </Box>

            <Dialog
              maxWidth='sm'
              disableBackdropClick
              fullWidth
              open={showImageEditor}
            >
              <DialogTitle>
                <Box className={classes.cropperActionButtonContainer}>
                  <Box>Set Image</Box>
                  <Box>
                    <IconButton onClick={() => setShowImageEditor(false)}>
                      <Icon>close_icon</Icon>
                    </IconButton>
                    <IconButton onClick={onImageCrop}>
                      <Icon>done_icon</Icon>
                    </IconButton>
                  </Box>
                </Box>
              </DialogTitle>
              <Divider />
              <DialogContent>
                <Cropper
                  initialAspectRatio={1 / 1}
                  viewMode={1}
                  src={rowImageFile && rowImageFile[0].dataURL}
                  onInitialized={instance => {
                    setCropper(instance);
                  }}
                />
              </DialogContent>
            </Dialog>
          </Grid>

          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Name'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  size='small'
                  label='Description'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
};

export default OrgsForm;
