import React from 'react';

import { Question as QuestionProps } from '~/store/reducers/questions/types';

import { Container, Title } from './styles';

function Question({ title, highlight_word }: QuestionProps) {
  return (
    <Container>
      <Title
        parse={[
          {
            pattern: new RegExp(`${highlight_word}`),
            style: {
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            },
          },
        ]}>
        {title}
      </Title>
    </Container>
  );
}

export default Question;
