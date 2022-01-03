import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 20px;

  border-radius: 6px;

  background: ${({ theme }) => theme.colors.progressBar.background};

  margin-left: 32px;
`;

export const Content = styled(Animated.View)`
  height: 10px;
  border-radius: 3px;

  background: ${({ theme }) => theme.colors.progressBar.content};
`;
