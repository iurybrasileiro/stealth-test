export interface Loading {
  loadTranslations: boolean;
}

export interface TranslationData {
  [key: string]: string;
}

export interface TranslationsState {
  data?: TranslationData;
  loading: Loading;
}
