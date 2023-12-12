import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { epic } from 'store/epic';
import { Action } from 'store/models/action-types';
import { dependencies } from 'store/models/Dependencies';
import { State } from 'store/models/State';
import { rootReducer } from 'store/reducer';

export const getStoreWithEpics = (
  initialState: Partial<State> = {}
): Store<State, Action> => {

  const epicMiddleware = createEpicMiddleware({
    dependencies
  });

  const enhancer = compose(applyMiddleware(epicMiddleware));

  const store = createStore<State, Action, any, any>(
    rootReducer,
    initialState,
    enhancer
  );

  epicMiddleware.run(epic);

  return store;
};
