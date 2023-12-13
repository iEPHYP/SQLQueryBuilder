import {
  actionCreators,
  PickActionCreators
} from 'store/action-creators';
import { PickStates } from 'store/models/State';
import { Variable } from 'types';
import { NullableVariable } from '../../../../../../../../FilterItem/model';

export interface VariableDatePickerOwnProps {
  variable: NullableVariable;
  onVariablePicked: (variable: Variable) => void;
}

export type VariableDatePickerStateProps = PickStates<'variables'>;

export type VariableDatePickerDispatchProps = PickActionCreators<
  'changeCanSaveFilterState'
>;

export const VDPMapDispatchToProps: VariableDatePickerDispatchProps = {
  changeCanSaveFilterState: actionCreators.changeCanSaveFilterState
};

export type VariableDatePickerProps = VariableDatePickerStateProps &
  VariableDatePickerDispatchProps &
  VariableDatePickerOwnProps;
