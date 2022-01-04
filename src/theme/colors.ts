import { darken } from 'polished';

const global = {
  primary: '#169be5',
  secondary: '#0f6b9e',
  tertiary: '#778ca0',
  quaternary: '#ff7987',
  quiternary: '#01deea',
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
    secondary: global.secondary,
  },

  home: {
    content: global.secondary,

    option: {
      background: base.white,
    },

    footer: {
      default: 'transparent',
      error: global.quaternary,
      success: global.quiternary,
    },
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

  progressBar: {
    background: global.secondary,
    content: darken(0.1, global.secondary),
  },

  answerResponseContainer: {
    border: base.white,
  },

  icon: {
    primary: base.white,
  },
};
