const keys = ['xs', 'sm', 'md', 'lg', 'xl'];
const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
const unit = 'px';
const step = 5;

const up = key => {
  const value = typeof values[key] === 'number' ? values[key] : key;
  return `@media (min-width:${value}${unit})`;
};

const down = key => {
  const endIndex = keys.indexOf(key) + 1;
  const upperbound = values[keys[endIndex]];

  if (endIndex === keys.length) {
    return up('xs');
  }

  const value =
    typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
  return `@media (max-width:${value - step / 100}${unit})`;
};

const between = (start, end) => {
  const endIndex = keys.indexOf(end);

  if (endIndex === keys.length - 1) {
    return up(start);
  }

  return (
    `@media (min-width:${
      typeof values[start] === 'number' ? values[start] : start
    }${unit}) and ` +
    `(max-width:${
      (endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number'
        ? values[keys[endIndex + 1]]
        : end) -
      step / 100
    }${unit})`
  );
};

const only = key => {
  return between(key, key);
};

let warnedOnce = false;
const width = key => {
  if (process.env.NODE_ENV !== 'production') {
    if (!warnedOnce) {
      warnedOnce = true;
      console.warn(
        [
          "Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.",
          'Use the `theme.breakpoints.values` instead.',
        ].join('\n')
      );
    }
  }

  return values[key];
};

const breakpoints = {
  keys,
  values,
  up,
  down,
  between,
  only,
  width,
};

export default breakpoints;
