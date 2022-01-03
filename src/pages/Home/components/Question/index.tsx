import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Question as QuestionProps } from '~/store/reducers/questions/types';
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

interface QuestionRef {
  reset: () => void;
}

function Question(
  { title, highlight_word, partial_answer, options }: QuestionProps,
  ref: ForwardedRef<QuestionRef>,
) {
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

  function handleReset() {
    setSelectedWord(null);
  }

  useImperativeHandle(ref, () => ({
    reset: handleReset,
  }));

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

export default forwardRef(Question);
