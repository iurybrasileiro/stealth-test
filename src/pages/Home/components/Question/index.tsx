import React, { useCallback } from 'react';

import { Question as QuestionProps } from '~/store/reducers/questions/types';

import {
  Container,
  Title,
  PartailAnswer,
  PartailAnswerText,
  AnswerOptionContainer,
} from './styles';

const DEFAULT_LETTER_QUATITY = 8;

function Question({
  title,
  highlight_word,
  partial_answer,
  correct_answer,
}: QuestionProps) {
  const partailAnswer = useCallback(() => {
    const splittedAnswer = partial_answer.split(' ');
    const isPlaceToAnswerOption = /_/;

    return splittedAnswer.map(item => {
      if (isPlaceToAnswerOption.test(item))
        return (
          <AnswerOptionContainer
            lettersQuantity={correct_answer?.length || DEFAULT_LETTER_QUATITY}
          />
        );

      return <PartailAnswerText>{item}</PartailAnswerText>;
    });
  }, [correct_answer?.length, partial_answer]);

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

      <PartailAnswer>{partailAnswer()}</PartailAnswer>
    </Container>
  );
}

export default Question;
