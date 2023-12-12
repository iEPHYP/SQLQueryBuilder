import { ClassesProp } from 'App/utils/classes-prop';
import { PickStates } from 'store/models/State';
import { SQLGeneratorClassKeys } from './styles';

export interface SQLGeneratorOwnProps {}

export type SQLGeneratorStateProps = PickStates<'sqlQuery'>;

export interface SQLGeneratorDispatchProps {}

export type SQLGeneratorProps = SQLGeneratorStateProps &
  SQLGeneratorDispatchProps;

export type SQLGeneratorViewProps = SQLGeneratorOwnProps &
  SQLGeneratorStateProps &
  ClassesProp<SQLGeneratorClassKeys>;
