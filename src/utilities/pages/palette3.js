import { colors } from '@material-ui/core';

const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },

  divider: 'rgba(0, 0, 0, 0.12)',

  background: {
    paper: colors.common.white,
    default: colors.grey[50],
  },

  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

const dark = {
  text: {
    primary: colors.common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },

  divider: 'rgba(255, 255, 255, 0.12)',

  background: {
    paper: colors.grey[800],
    default: '#303030',
  },

  action: {
    active: colors.common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

const types = { light, dark };
const type = 'light';

const palette = {
  common: colors.common,

  type: type,

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

  success: {
    light: colors.green[300],
    main: colors.green[500],
    dark: colors.green[700],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  grey: colors.grey,

  contrastThreshold: 3,
  tonalOffset: 0.2,

  ...types[type],
};

export default palette;
