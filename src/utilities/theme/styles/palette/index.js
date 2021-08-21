import { colors } from '@material-ui/core';
import { light } from './type/light';
import { dark } from './type/dark';

const types = { light, dark };
const type = 'light';

const palette = {
  common: colors.common,
  type: type,
  grey: colors.grey,
  contrastThreshold: 3,
  tonalOffset: 0.2,
  ...types[type],

  primary: {
    light: colors.indigo[300],
    main: colors.indigo[500],
    dark: colors.indigo[700],
    contrastText: '#fff',
  },

  secondary: {
    light: colors.pink['A200'],
    main: colors.pink['A400'],
    dark: colors.pink['A700'],
    contrastText: '#fff',
  },

  success: {
    light: colors.green[300],
    main: colors.green[500],
    dark: colors.green[700],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  error: {
    light: colors.red[300],
    main: colors.red[500],
    dark: colors.red[700],
    contrastText: '#fff',
  },

  warning: {
    light: colors.orange[300],
    main: colors.orange[500],
    dark: colors.orange[700],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  info: {
    light: colors.blue[300],
    main: colors.blue[500],
    dark: colors.blue[700],
    contrastText: '#fff',
  },
};

export default palette;
