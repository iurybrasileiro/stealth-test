import React from 'react';
import { ActivityIndicator, GestureResponderEvent } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Container, Text } from './styles';

interface ButtonProps {
  children: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
  disabled?: boolean;
  status?: boolean;
}

function Button({
  children,
  loading = false,
  disabled = false,
  status,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      status={status}
      {...rest}
      activeOpacity={0.6}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator color={theme.colors.activityIndicator} />
      ) : (
        <Text status={status}>{children}</Text>
      )}
    </Container>
  );
}

export default Button;
