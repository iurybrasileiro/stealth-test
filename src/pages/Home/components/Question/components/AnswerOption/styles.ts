import styled from 'styled-components/native';

interface IContainer {
  wordLength: number;
}

export const OPTION_CONTAIER_OFFSET = 16;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<IContainer>`
  width: ${({ wordLength }) => wordLength * 16 + OPTION_CONTAIER_OFFSET}px;

  background: ${({ theme }) => theme.colors.home.option.background};
  border-radius: 16px;

  padding: 8px 0px;

  justify-content: center;
  align-items: center;

  elevation: 3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 8px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size(18)}px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
