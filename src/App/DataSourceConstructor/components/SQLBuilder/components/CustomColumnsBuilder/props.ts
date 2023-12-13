import { ClassesProp } from 'App/utils/classes-prop';
import { PickStates } from 'store/models/State';

import { CustomColumnsBuilderClassKeys } from './styles';

export type CustomColumnsBuilderStateProps = PickStates<
  'customColumns' | 'aggregations' | 'groupings'
>;

export type CustomColumnsBuilderProps = CustomColumnsBuilderStateProps;
export type CustomColumnsBuilderViewProps = CustomColumnsBuilderStateProps &
  ClassesProp<CustomColumnsBuilderClassKeys>;
