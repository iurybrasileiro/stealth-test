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

export const PartailAnswer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;

  margin-top: 32px;
  margin-bottom: 32px;
`;

export const PartailAnswerText = styled.Text`
  font-size: ${({ theme }) => theme.font.size(18)}px;

  margin-right: 4px;
`;

interface IAnswerOptionContainerProps {
  lettersQuantity: number;
}

export const AnswerOptionContainer = styled.View<IAnswerOptionContainerProps>`
  width: ${({ lettersQuantity }) => 15 * lettersQuantity}px;
  height: 40px;

  margin: 0px 16px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) =>
    theme.colors.answerResponseContainer.border};
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 0px 16px;

  margin-top: auto;
  margin-bottom: auto;
`;
