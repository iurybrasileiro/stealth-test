import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import Button from '~/components/Button';
import { Question } from '~/store/reducers/questions/types';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  padding-top: ${({ theme }) => theme.metrics.statusBarHeight + 16}px;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;

  margin-top: 64px;

  background: ${({ theme }) => theme.colors.home.content};

  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  padding-top: 16px;
  padding-bottom: ${({ theme }) => theme.metrics.bottomSpace + 16}px;
`;

export const Title = styled.Text`
  text-align: center;
`;

export const QuestionsList: new () => FlatList<Question> =
  styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    scrollEnabled: false,
  })`` as any;

export const CTA = styled(Button)`
  width: ${({ theme }) => theme.metrics.window.width - 32}px;

  margin-left: 16px;
`;
