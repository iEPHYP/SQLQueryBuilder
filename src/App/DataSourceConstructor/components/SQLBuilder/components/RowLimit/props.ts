import { ClassesProp } from 'App/utils/classes-prop';
import { PickActionCreators } from 'store/action-creators';
import { PickStates } from 'store/models/State';

import { RowLimitProps } from './RowLimit';
import { RowLimitBuilderClassKeys } from './styles';

export type RowLimitBuilderStateProps = PickStates<'rowLimit'>;
export type RowLimitBuilderDispatchProps = PickActionCreators<'setRowLimit'>;

export type RowLimitBuilderProps = RowLimitBuilderStateProps & RowLimitBuilderDispatchProps;

export type RowLimitBuilderViewProps = RowLimitBuilderStateProps & {
  onRowLimitChange: RowLimitProps['onRowLimitChange'];
} & ClassesProp<RowLimitBuilderClassKeys>;
