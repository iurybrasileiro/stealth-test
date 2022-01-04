import { Alert } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import IThunkAction from '~/store/ThunkAction';

import { updateTranslationsData, updateTranslationsLoading } from './index';
import { TranslationData } from './types';

export function loadTranslations(): IThunkAction {
  return async dispatch => {
    dispatch(updateTranslationsLoading({ loadTranslations: true }));
    try {
      const response = await firestore().collection('translations').get();

      const translations = response.docs.map(item => {
        return {
          id: item.id,
          ...item.data(),
        };
      });

      const firstTranslate = translations[0];
      const { german } = firstTranslate as {
        id: string;
        german: TranslationData;
      };

      dispatch(updateTranslationsData(german));
    } catch {
      Alert.alert('Sorry, We had an unexpected error.');
    } finally {
      dispatch(updateTranslationsLoading({ loadTranslations: false }));
    }
  };
}
