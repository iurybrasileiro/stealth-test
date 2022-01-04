import React, { useCallback, useMemo, useRef } from 'react';

import { Question as IQuestion } from '~/store/reducers/questions/types';
import { getLongestWordInList } from '~/utils/helpers';

import AnswerOption from './components/AnswerOption';
import {
  Container,
  Title,
  PartailAnswer,
  PartailAnswerText,
  AnswerOptionContainer,
  OptionsContainer,
} from './styles';

interface QuestionProps extends IQuestion {
  handleSelectOption: (option: string, id: string) => void;
}

function Question({
  id,
  title,
  highlight_word,
  partial_answer,
  options,
  handleSelectOption,
  answer_selected,
  isCorrect,
}: QuestionProps) {
  const containerRef = useRef<any>(null);
  const anwerContainerRef = useRef<any>(null);

  const handleSelectItem = useCallback(
    (text: string) => {
      handleSelectOption(text, id);
    },
    [handleSelectOption, id],
  );

  const getLongestWordSize = useMemo(() => {
    const longestWord = getLongestWordInList(options);

    return longestWord.length;
  }, [options]);

  const partailAnswer = useCallback(() => {
    const splittedAnswer = partial_answer.split(' ');
    const isPlaceToAnswerOption = /_/;

    return splittedAnswer.map(item => {
      if (isPlaceToAnswerOption.test(item)) {
        return (
          <AnswerOptionContainer
            ref={anwerContainerRef}
            lettersQuantity={getLongestWordSize}
          />
        );
      }

      return <PartailAnswerText>{item}</PartailAnswerText>;
    });
  }, [getLongestWordSize, partial_answer]);

  const renderOption = useCallback(
    (option, index) => {
      return (
        <AnswerOption
          answerRef={anwerContainerRef}
          isSelected={answer_selected === option}
          alreadyVerified={isCorrect !== undefined}
          onPress={handleSelectItem}
          key={`${option}-${index}`}>
          {option}
        </AnswerOption>
      );
    },
    [answer_selected, handleSelectItem, isCorrect],
  );

  return (
    <Container ref={containerRef}>
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

      <OptionsContainer>{options.map(renderOption)}</OptionsContainer>
    </Container>
  );
}

export default Question;
