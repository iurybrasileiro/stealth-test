import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Loading, TranslationsState } from './types';

const INITIAL_STATE: TranslationsState = {
  data: undefined,
  loading: {
    loadTranslations: false,
  },
};

const translations = createSlice({
  name: 'translations',
  initialState: INITIAL_STATE,
  reducers: {
    updateTranslationsData(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
    updateTranslationsLoading(
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

export default translations.reducer;
export const { updateTranslationsData, updateTranslationsLoading } =
  translations.actions;
