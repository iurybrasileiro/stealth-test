import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import ApplicationState from './ApplicationState';

type IThunkAction<R = void> = ThunkAction<R, ApplicationState, any, AnyAction>;

export default IThunkAction;
