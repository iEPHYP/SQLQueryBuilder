import { ClassesProp } from 'App/utils/classes-prop';
import { PickStates } from 'store/models/State';

import { GroupingsBuilderClassKeys } from './styles';

export type GroupingsBuilderStateProps = PickStates<'groupings'>;

export type GroupingsBuilderProps = GroupingsBuilderStateProps;
export type GroupingsBuilderViewProps = GroupingsBuilderStateProps &
  ClassesProp<GroupingsBuilderClassKeys>;
