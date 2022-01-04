import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpace + 16}px;

  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const AnswerResponse = styled.Text`
  margin-bottom: 16px;
  margin-left: 16px;
`;

export const AnswerResponseBolder = styled(AnswerResponse)`
  font-weight: bold;
`;

export const CTA = styled(Button)``;
