import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => {
  return {
    rectContainer: {
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
    circleContainer: {
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
    rectImage: {
      borderRadius: '5px',
    },
    circleImage: {
      borderRadius: '50%',
    },
  };
});
