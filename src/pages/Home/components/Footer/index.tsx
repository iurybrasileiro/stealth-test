import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from 'styled-components/native';

import ApplicationState from '~/store/ApplicationState';
import { updateQuestionsData } from '~/store/reducers/questions';
import { Question } from '~/store/reducers/questions/types';

import { Container, AnswerResponse, AnswerResponseBolder, CTA } from './styles';

interface FooterProps {
  currentQuestion?: Question;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

function Footer({ currentQuestion, setCurrentQuestion }: FooterProps) {
  const dispatch = useDispatch();
  const theme = useTheme();

  const questions = useSelector(
    (state: ApplicationState) => state.questions.data,
  );

  function goToNextQuestion() {
    setCurrentQuestion(oldQuestion => {
      const nextQuestion = oldQuestion + 1;
      const questionSize = (questions?.length || 0) - 1;

      if (oldQuestion < questionSize) return nextQuestion;

      return 0;
    });
  }

  function handleVerifyIfIsCorrect() {
    if (currentQuestion) {
      const { correct_answer, answer_selected } = currentQuestion;

      const isCorrect = correct_answer === answer_selected;

      const updatedQuestions = questions?.map(question => {
        if (question.id === currentQuestion?.id) {
          return {
            ...question,
            isCorrect,
          };
        }

        return question;
      });

      dispatch(updateQuestionsData(updatedQuestions));
    }
  }

  function handleResetSelectedAnswer() {
    setCurrentQuestion(0);

    const updatedQuestions = questions?.map(question => ({
      ...question,
      answer_selected: undefined,
      isCorrect: undefined,
    }));

    dispatch(updateQuestionsData(updatedQuestions));
  }

  function handleResetOrNext() {
    if (currentQuestion && !currentQuestion?.isCorrect) {
      handleResetSelectedAnswer();
    } else {
      goToNextQuestion();
    }
  }

  function ctaAction() {
    if (currentQuestion?.isCorrect === undefined) {
      handleVerifyIfIsCorrect();
    } else {
      handleResetOrNext();
    }
  }

  const ctaText = useMemo(() => {
    if (
      currentQuestion &&
      currentQuestion?.isCorrect === undefined &&
      currentQuestion?.answer_selected
    ) {
      return 'CHECK ANSWER';
    }

    return 'CONTINUE';
  }, [currentQuestion]);

  const footerColor = useMemo(() => {
    if (currentQuestion?.isCorrect === undefined)
      return theme.colors.home.footer.default;

    if (!currentQuestion?.isCorrect) return theme.colors.home.footer.error;

    return theme.colors.home.footer.success;
  }, [
    currentQuestion,
    theme.colors.home.footer.default,
    theme.colors.home.footer.error,
    theme.colors.home.footer.success,
  ]);

  return (
    <Container style={{ backgroundColor: footerColor }}>
      {currentQuestion?.isCorrect !== undefined &&
      currentQuestion?.isCorrect ? (
        <AnswerResponseBolder>Great job!</AnswerResponseBolder>
      ) : null}

      {currentQuestion?.isCorrect !== undefined &&
      !currentQuestion?.isCorrect ? (
        <AnswerResponse>
          <AnswerResponseBolder>Answer: </AnswerResponseBolder>
          {currentQuestion?.correct_answer}
        </AnswerResponse>
      ) : null}

      <CTA
        disabled={!questions?.length || !currentQuestion?.answer_selected}
        onPress={ctaAction}>
        {ctaText}
      </CTA>
    </Container>
  );
}

export default Footer;
