import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Loading, QuestionsState } from './types';

const INITIAL_STATE: QuestionsState = {
  data: undefined,
  loading: {
    loadQuestions: false,
  },
};

const questions = createSlice({
  name: 'questions',
  initialState: INITIAL_STATE,
  reducers: {
    updateQuestionsData(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
    updateQuestionsLoading(
      state,
      { payload }: PayloadAction<Partial<Record<keyof Loading, boolean>>>,
    ) {
      return {
        ...state,
        loading: {
          ...state.loading,
          ...payload,
        },
      };
    },
  },
});

export default questions.reducer;
export const { updateQuestionsData, updateQuestionsLoading } =
  questions.actions;
