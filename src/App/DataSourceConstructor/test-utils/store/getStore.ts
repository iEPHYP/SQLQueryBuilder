import { createStore, Store } from 'redux';
import { Action } from 'store/models/action-types';
import { State } from 'store/models/State';
import { rootReducer } from 'store/reducer';

export const getStore = (initialState: Partial<State> = {}): Store<State, Action> =>
  createStore<State, Action, {}, {}>(rootReducer, initialState);
