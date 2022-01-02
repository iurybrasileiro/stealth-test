export interface Loading {
  loadQuestions: boolean;
}

export interface Question {
  title: string;
  highlight_word: string;
  correct_answer: string;
  partial_answer: string;
  options: string[];
}

export interface QuestionsState {
  data?: Question[];
  loading: Loading;
}
