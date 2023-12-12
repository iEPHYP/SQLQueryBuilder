import { ClassesProp } from 'App/utils/classes-prop';
import { PickStates } from 'store/models/State';
import { OrdersBuilderClassKeys } from './styles';

export type OrdersBuilderStateProps = PickStates<
  'orders' | 'aggregations' | 'groupings'
>;

export type OrdersBuilderProps = OrdersBuilderStateProps;
export type OrdersBuilderViewProps = OrdersBuilderStateProps &
  ClassesProp<OrdersBuilderClassKeys>;
