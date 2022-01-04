import React, {
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

import Footer from './components/Footer';
import Question from './components/Question';
import { Container, Header, Content, Title, QuestionsList } from './styles';

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

  const currentQuestionData = useMemo(() => {
    return questions?.[currentQuestion];
  }, [currentQuestion, questions]);

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
    ({ item: question }) => (
      <Question handleSelectOption={handleSelectOption} {...question} />
    ),
    [handleSelectOption],
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

        <Footer
          currentQuestion={currentQuestionData}
          setCurrentQuestion={setCurrentQuestion}
        />
      </Content>
    </Container>
  );
}

export default Home;
