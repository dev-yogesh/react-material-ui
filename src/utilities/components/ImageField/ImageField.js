import React from 'react';
import { Box, Typography, Button, Chip } from '@material-ui/core';
import ImageUploading from 'react-images-uploading';
import ImageEditor from './components/ImageEditor/ImageEditor';
import { useStyles } from './styles';

const ImageField = ({
  rowImageFile,
  setRowImageFile,
  showImageEditor,
  setShowImageEditor,
  setCropper,
  croppedImageFile,
  onImageCrop,
  onImageRemove,
  options,
}) => {
  const classes = useStyles();

  return (
    <>
      <ImageUploading
        value={rowImageFile}
        acceptType={['jpg', 'jpeg', 'webp', 'png']}
        maxFileSize={1000000}
        onChange={(images) => {
          setRowImageFile(images);
          setShowImageEditor(true);
        }}
      >
        {({ onImageUpload, isDragging, dragProps, errors }) => (
          <>
            <Box
              style={{
                border: '1px solid #bbb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 10px',
              }}
              onClick={onImageUpload}
            >
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  <i
                    className='fas fa-user '
                    style={{ width: '25px', fontSize: '1rem' }}
                  ></i>
                </Box>
                {!croppedImageFile && (
                  <Typography variant='body2'>Upload Photo</Typography>
                )}

                {croppedImageFile && (
                  <Chip
                    label={croppedImageFile?.file?.name}
                    onDelete={onImageRemove}
                    variant='outlined'
                  />
                )}
              </Box>
              <Box>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  disableElevation
                >
                  Browse
                </Button>
              </Box>
            </Box>
            {/* <Box
              onClick={onImageUpload}
              {...dragProps}
              style={
                isDragging
                  ? {
                      borderColor: 'red',
                    }
                  : undefined
              }
              className={
                options.shape === 'rect'
                  ? classes.rectContainer
                  : options.shape === 'circle'
                  ? classes.circleContainer
                  : ''
              }
            >
              {!croppedImageFile && (
                <Box style={{ textAlign: 'center', padding: '1rem' }}>
                  <Typography variant='subtitle1'>
                    Drag image or click here
                  </Typography>
                </Box>
              )}

              {croppedImageFile && (
                <img
                  src={
                    typeof croppedImageFile === 'string'
                      ? croppedImageFile
                      : croppedImageFile.dataURL
                  }
                  alt='profile'
                  height='100%'
                  width='100%'
                  className={
                    options.shape === 'rect'
                      ? classes.rectImage
                      : options.shape === 'circle'
                      ? classes.circleImage
                      : ''
                  }
                />
              )}
            </Box> */}

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

      <ImageEditor
        rowImageFile={rowImageFile}
        showImageEditor={showImageEditor}
        setShowImageEditor={setShowImageEditor}
        setCropper={setCropper}
        onImageCrop={onImageCrop}
        options={options}
      />
    </>
  );
};

export default ImageField;
