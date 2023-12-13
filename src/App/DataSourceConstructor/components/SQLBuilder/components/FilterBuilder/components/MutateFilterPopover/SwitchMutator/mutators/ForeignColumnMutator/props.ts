import { ClassesProp } from 'App/utils/classes-prop';
import { ForeignFieldProps } from 'process/startnew/ForeignField';
import { actionCreators, PickActionCreators } from 'store/action-creators';
import { PickStates } from 'store/models/State';

import { VariablesPickerProps } from '../../VariablesPicker/props';
import { MutatorProps } from '../props';

import { ForeignColumnOperation } from './ForeignColumnOperation';
import { ForeignColumnMutatorClassKeys } from './styles';

export type ForeignColumnMutatorOwnProps = MutatorProps;

export type ForeignColumnMutatorStateProps = {
  record: ForeignColumnOperation['operands'];
  enums: string[] | undefined;
} & PickStates<'canSaveFilter' | 'pickedVariables'>;

export type ForeignColumnMutatorDispatchProps = PickActionCreators<
  'setOperation' | 'changeCanSaveFilterState' | 'setPickedVariables'
>;

const { setOperation, setPickedVariables, changeCanSaveFilterState } = actionCreators;
export const FCMMapDispatchToProps: ForeignColumnMutatorDispatchProps = {
  setOperation,
  setPickedVariables,
  changeCanSaveFilterState,
};

export type ForeignColumnMutatorProps = ForeignColumnMutatorOwnProps &
  ForeignColumnMutatorStateProps &
  ForeignColumnMutatorDispatchProps;

export interface IForeignColumnMutatorHandlers {
  handleOperandChange: ForeignFieldProps['handleChange'];
  handleVariablePick: VariablesPickerProps['onVariablePicked'];
  filter: Required<VariablesPickerProps>['filter'];
}

export type ForeignColumnMutatorViewProps = ForeignColumnMutatorOwnProps &
  ForeignColumnMutatorStateProps &
  IForeignColumnMutatorHandlers &
  ClassesProp<ForeignColumnMutatorClassKeys>;
