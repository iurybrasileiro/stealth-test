const global = {
  primary: '#169be5',
  secondary: '#0f6b9e',
  tertiary: '#778ca0',
};

const base = {
  black: '#000000',
  white: '#ffffff',
};

export default {
  global,

  background: global.primary,

  text: {
    primary: base.white,
  },

  button: {
    default: {
      background: global.primary,
    },
    disabled: {
      background: global.tertiary,
    },
  },

  activityIndicator: base.white,

  icon: {
    primary: base.white,
  },
};
