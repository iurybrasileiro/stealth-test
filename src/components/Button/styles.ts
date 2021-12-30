import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 100%;
  height: 55px;

  justify-content: center;
  align-items: center;

  border-radius: 27px;

  elevation: 3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  background: ${({ theme, disabled }) =>
    theme.colors.button[disabled ? 'disabled' : 'default'].background};
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size(14)}px;
  text-transform: uppercase;
`;
