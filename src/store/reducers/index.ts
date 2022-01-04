import { combineReducers } from '@reduxjs/toolkit';

import questions from './questions';
import translations from './translations';

export default combineReducers({
  questions,
  translations,
});
