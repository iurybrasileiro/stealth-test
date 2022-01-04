export interface Loading {
  loadQuestions: boolean;
}

export interface Question {
  id: string;
  title: string;
  highlight_word: string;
  correct_answer: string;
  partial_answer: string;
  options: string[];
  answer_selected?: string;
  isCorrect?: boolean;
}

export interface QuestionsState {
  data?: Question[];
  loading: Loading;
}
