import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => {
  return {
    cropperActionButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    circleCropperContainer: {
      '& .cropper-view-box': {
        borderRadius: '50%',
      },
    },
    close: {
      color: 'red',
    },
    done: {
      color: 'green',
    },
  };
});
