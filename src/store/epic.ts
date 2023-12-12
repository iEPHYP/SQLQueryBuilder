import { combineEpics } from 'redux-observable';
import { dataSourceConstructorEpics } from 'App/DataSourceConstructor/redux/epics';

export const epic = combineEpics(dataSourceConstructorEpics);
