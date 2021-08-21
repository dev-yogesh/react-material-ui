import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => {
  return {
    imageUploadContainer: {
      position: 'relative',
      height: '200px',
      overflow: 'visible',
      border: '1px dashed #808080',
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
    cameraIcon: {
      position: 'absolute',
      borderRadius: '50%',
      bottom: '-10px',
      right: '-10px',
    },
    rowInput: {
      display: 'none',
    },
  };
});
