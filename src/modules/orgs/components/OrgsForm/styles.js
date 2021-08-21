import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => {
  return {
    cropperActionButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowInput: {
      display: 'none',
    },
    cropContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: '#808080',
      borderRadius: '2px',
    },
    mainCropContainer: {
      borderRadius: '2px',
    },
    imageUploadContainer: {
      height: '153px',
      border: '1px dashed #808080',
      '&:hover': {
        cursor: 'pointer',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '5px',
    },
    imageUploadContainerUser: {
      height: '153px',
      width: '153px',
      margin: 'auto',
      border: '1px dashed #808080',
      '&:hover': {
        cursor: 'pointer',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
    },
    cameraIcon: {
      position: 'absolute',
      borderRadius: '50%',
      bottom: '-10px',
      right: '-10px',
    },
    defaultImageContainer: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    defaultImage: {
      fontSize: '7rem',
      color: 'rgba(0, 0, 0, 0.54)',
    },
  };
});
