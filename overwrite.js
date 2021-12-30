import { Text, StyleSheet } from 'react-native';

import theme from './src/theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text.primary,
    fontSize: theme.font.size(12),
  },
});

function text() {
  const TextRender = Text.render;

  const initialDefaultProps = Text.defaultProps;

  Text.defaultProps = {
    ...initialDefaultProps,
  };
  Text.render = function render(props) {
    const oldProps = props;

    props = { ...props, style: [styles.text, props.style] };

    try {
      return TextRender.apply(this, arguments);
    } finally {
      props = oldProps;
    }
  };
}

export default () => {
  text();
};
