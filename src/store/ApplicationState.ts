import { QuestionsState } from './reducers/questions/types';
import { TranslationsState } from './reducers/translations/types';

interface ApplicationState {
  questions: QuestionsState;
  translations: TranslationsState;
}

export default ApplicationState;
