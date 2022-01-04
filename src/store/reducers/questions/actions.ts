import { Alert } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import IThunkAction from '~/store/ThunkAction';

import { updateQuestionsData, updateQuestionsLoading } from './index';

export function loadQuestions(): IThunkAction {
  return async dispatch => {
    dispatch(updateQuestionsLoading({ loadQuestions: true }));
    try {
      const response = await firestore().collection('questions').get();

      const questions = response.docs.map(item => {
        return {
          id: item.id,
          ...item.data(),
        };
      });

      dispatch(updateQuestionsData(questions));
    } catch {
      Alert.alert('Sorry, We had an unexpected error.');
    } finally {
      dispatch(updateQuestionsLoading({ loadQuestions: false }));
    }
  };
}
