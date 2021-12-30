import { MiddlewareAPI } from '@reduxjs/toolkit';

import ApplicationState from '../ApplicationState';

type NextFunction = (payload: any) => void;

function createThunkMiddleware() {
  return ({ dispatch, getState }: MiddlewareAPI<any, ApplicationState>) => {
    return (next: NextFunction): any => {
      return (action: any): any => {
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }

        return next(action);
      };
    };
  };
}

export default createThunkMiddleware;
