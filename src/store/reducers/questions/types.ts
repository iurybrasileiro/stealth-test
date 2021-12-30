export interface Loading {
  loadQuestions: boolean;
}

interface Question {
  title: string;
  highlight_word: string;
  partial_answer: string;
  options: string[];
}

export interface QuestionsState {
  data?: Question[];
  loading: Loading;
}
