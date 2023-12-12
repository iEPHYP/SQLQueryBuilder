import { ClassesProp } from 'App/utils/classes-prop';
import { PickStates } from 'store/models/State';
import { FilterBuilderClassKeys } from './styles';

export type FilterBuilderStateProps = PickStates<'filters'>;

export type FilterBuilderProps = FilterBuilderStateProps;
export type FilterBuilderViewProps = FilterBuilderStateProps &
  ClassesProp<FilterBuilderClassKeys>;
