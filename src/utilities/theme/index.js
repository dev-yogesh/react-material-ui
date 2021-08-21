import { createMuiTheme } from '@material-ui/core';

import breakpoints from './styles/breakpoints';
import mixins from './styles/mixins';
import palette from './styles/palette';
import shadows from './styles/shadows';
import typography from './styles/typography';
import shape from './styles/shape';
import transitions from './styles/transitions';
import zIndex from './styles/zIndex';

const direction = 'ltr';
const spacing = 8;

const theme = createMuiTheme({
  breakpoints,
  direction,
  mixins,
  palette,
  shadows,
  typography,
  spacing,
  shape,
  transitions,
  zIndex,
});

export default theme;
