import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.home.option.background};
  border-radius: 16px;

  padding: 8px 16px;

  elevation: 3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 8px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size(18)}px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
