import { createStore, applyMiddleware, compose, Store } from '@reduxjs/toolkit';

import ApplicationState from './ApplicationState';
import createThunkMiddleware from './middlewares/thunk';
import reducers from './reducers';

const thunk = createThunkMiddleware();

const store: Store<ApplicationState> = createStore(
  reducers,
  compose(applyMiddleware(thunk)),
);

export { store };
