import breakpoints from './breakpoints';

const mixins = {
  toolbar: {
    minHeight: 56,
    [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
      minHeight: 48,
    },
    [breakpoints.up('sm')]: {
      minHeight: 64,
    },
  },
};

export default mixins;
