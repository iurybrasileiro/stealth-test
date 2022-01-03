import React, { useCallback, useMemo, useRef, useState } from 'react';

import { Question as QuestionProps } from '~/store/reducers/questions/types';

import AnswerOption from './components/AnswerOption';
import {
  Container,
  Title,
  PartailAnswer,
  PartailAnswerText,
  AnswerOptionContainer,
  OptionsContainer,
} from './styles';

const DEFAULT_LETTER_QUATITY = 8;

function Question({
  title,
  highlight_word,
  partial_answer,
  options,
}: QuestionProps) {
  const containerRef = useRef<any>(null);
  const anwerContainerRef = useRef<any>(null);

  const [selectedWord, setSelectedWord] = useState<string | null>();

  const handleSelectItem = useCallback((text: string) => {
    setSelectedWord(oldSelectedWord => {
      if (oldSelectedWord === text) {
        return null;
      }

      return text;
    });
  }, []);

  const getBiggisterWordSize = useMemo(() => {
    return Math.max(...options.map(item => item.length));
  }, [options]);

  const partailAnswer = useCallback(() => {
    const splittedAnswer = partial_answer.split(' ');
    const isPlaceToAnswerOption = /_/;

    return splittedAnswer.map(item => {
      if (isPlaceToAnswerOption.test(item))
        return (
          <AnswerOptionContainer
            ref={anwerContainerRef}
            lettersQuantity={getBiggisterWordSize || DEFAULT_LETTER_QUATITY}
          />
        );

      return <PartailAnswerText>{item}</PartailAnswerText>;
    });
  }, [getBiggisterWordSize, partial_answer]);

  const renderOption = useCallback(
    (option, index) => {
      return (
        <AnswerOption
          answerRef={anwerContainerRef}
          isSelected={selectedWord === option}
          onPress={handleSelectItem}
          key={`${option}-${index}`}>
          {option}
        </AnswerOption>
      );
    },
    [handleSelectItem, selectedWord],
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
