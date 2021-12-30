import ParsedText from 'react-native-parsed-text';

import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({ theme }) => theme.metrics.window.width}px;

  padding: 16px;
`;

export const Title = styled(ParsedText)`
  font-size: ${({ theme }) => theme.font.size(22)}px;

  margin-top: 16px;

  text-align: center;
`;
