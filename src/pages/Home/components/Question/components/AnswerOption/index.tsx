import React from 'react';

import { Container, Text } from './styles';

interface AnswerOptionProps {
  children: string;
}

function AnswerOption({ children }: AnswerOptionProps) {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
}

export default AnswerOption;
