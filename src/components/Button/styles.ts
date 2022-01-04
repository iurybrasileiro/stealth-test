import styled, { css } from 'styled-components/native';

interface ContainerProps {
  status?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<ContainerProps>`
  width: 100%;
  height: 55px;

  justify-content: center;
  align-items: center;

  border-radius: 27px;

  elevation: 3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({ theme, disabled, status }) =>
    status === undefined
      ? css`
          background: ${theme.colors.button[disabled ? 'disabled' : 'default']
            .background};
        `
      : null}

  ${({ theme, status }) =>
    status !== undefined && status
      ? css`
          background: ${theme.colors.button.success.background};
        `
      : null}

  ${({ theme, status }) =>
    status !== undefined && !status
      ? css`
          background: ${theme.colors.button.error.background};
        `
      : null}
`;

interface TextProps {
  status?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size(14)}px;
  text-transform: uppercase;

  ${({ theme, status }) =>
    status !== undefined && status
      ? css`
          color: ${theme.colors.button.success.text};
        `
      : null}

  ${({ theme, status }) =>
    status !== undefined && !status
      ? css`
          color: ${theme.colors.button.error.text};
        `
      : null}
`;
