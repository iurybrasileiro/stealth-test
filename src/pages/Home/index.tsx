import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '~/components/Icon';
import iconhelper from '~/components/Icon/iconhelper';
import ProgressBar from '~/components/ProgressBar';
import ApplicationState from '~/store/ApplicationState';
import { updateQuestionsData } from '~/store/reducers/questions';
import { loadQuestions } from '~/store/reducers/questions/actions';

import Question from './components/Question';
import {
  Container,
  Header,
  Content,
  Title,
  QuestionsList,
  CTA,
} from './styles';

function Home() {
  const dispatch = useDispatch();

  const scrollRef = useRef<FlatList>(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { questions } = useSelector((state: ApplicationState) => {
    const { data } = state.questions;

    return {
      questions: data,
    };
  });

  const questionsRef = useMemo(() => {
    return questions?.map(() => createRef());
  }, [questions]);

  useEffect(() => {
    dispatch(loadQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (questions?.length) {
      scrollRef.current?.scrollToIndex({
        index: currentQuestion,
      });
    }
  }, [currentQuestion, questions?.length]);

  function goToNextQuestion() {
    setCurrentQuestion(oldQuestion => {
      const nextQuestion = oldQuestion + 1;
      const questionSize = (questions?.length || 0) - 1;

      if (oldQuestion < questionSize) return nextQuestion;

      return 0;
    });
  }

  const fillProgress = useMemo(() => {
    const questionsQuantity = (questions?.length || 0) - 1;

    return currentQuestion / questionsQuantity;
  }, [currentQuestion, questions?.length]);

  const handleSelectOption = useCallback(
    (text: string, id: string) => {
      const updatedQuestions = questions?.map(question => {
        if (question.id === id) return { ...question, answer_selected: text };

        return question;
      });

      dispatch(updateQuestionsData(updatedQuestions));
    },
    [dispatch, questions],
  );

  const renderQuestion = useCallback(
    ({ item: question, index }) => (
      <Question
        ref={questionsRef?.[index]}
        handleSelectOption={handleSelectOption}
        {...question}
      />
    ),
    [handleSelectOption, questionsRef],
  );

  return (
    <Container>
      <Header>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name={iconhelper.caretLeft} />
        </TouchableOpacity>

        <ProgressBar fill={fillProgress} />
      </Header>

      <Content>
        <Title>Fill in the missing words</Title>

        <QuestionsList
          ref={scrollRef}
          data={questions}
          keyExtractor={item => item.id}
          renderItem={renderQuestion}
        />

        <CTA disabled={!questions?.length} onPress={goToNextQuestion}>
          CHECK ANSWER
        </CTA>
      </Content>
    </Container>
  );
}

export default Home;
