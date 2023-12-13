import { ClassesProp } from 'App/utils/classes-prop';
import { PickStates } from 'store/models/State';

import { AggregationsBuilderClassKeys } from './styles';

export type AggregationsBuilderStateProps = PickStates<'aggregations'>;

export type AggregationsBuilderProps = AggregationsBuilderStateProps;
export type AggregationsBuilderViewProps = AggregationsBuilderStateProps &
  ClassesProp<AggregationsBuilderClassKeys>;
