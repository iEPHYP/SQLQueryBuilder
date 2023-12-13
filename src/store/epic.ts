import { dataSourceConstructorEpics } from 'App/DataSourceConstructor/redux/epics';
import { combineEpics } from 'redux-observable';

export const epic = combineEpics(dataSourceConstructorEpics);
