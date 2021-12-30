import React, { useEffect, useRef } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '~/components/Icon';
import iconhelper from '~/components/Icon/iconhelper';
import ApplicationState from '~/store/ApplicationState';
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

  const { questions } = useSelector((state: ApplicationState) => {
    const { data } = state.questions;

    return {
      questions: data,
    };
  });

  useEffect(() => {
    dispatch(loadQuestions());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name={iconhelper.caretLeft} />
        </TouchableOpacity>
      </Header>

      <Content>
        <Title>Fill in the missing words</Title>

        <QuestionsList
          ref={scrollRef}
          data={questions}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item: question }) => <Question {...question} />}
        />

        <CTA>CHECK ANSWER</CTA>
      </Content>
    </Container>
  );
}

export default Home;
