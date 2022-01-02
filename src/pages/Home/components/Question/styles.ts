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
`;

export const PartailAnswerText = styled.Text`
  font-size: ${({ theme }) => theme.font.size(18)}px;

  margin-right: 4px;
`;

interface IAnswerOptionContainerProps {
  lettersQuantity: number;
}

// This offset is 16 pixels for left space and 16 for right space
const ANSWER_OPTION__CONTAINER_OFFSET = 32;

export const AnswerOptionContainer = styled.View<IAnswerOptionContainerProps>`
  width: ${({ lettersQuantity }) =>
    16 * lettersQuantity + ANSWER_OPTION__CONTAINER_OFFSET}px;
  height: 40px;

  margin: 0px 16px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) =>
    theme.colors.answerResponseContainer.border};
`;
