import React from 'react';
import { ActivityIndicator, GestureResponderEvent } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Container, Text } from './styles';

interface ButtonProps {
  children: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
  disabled?: boolean;
}

function Button({
  children,
  loading = false,
  disabled = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container {...rest} activeOpacity={0.6} disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator color={theme.colors.activityIndicator} />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

export default Button;
