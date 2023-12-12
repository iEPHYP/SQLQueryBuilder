import { PopoverManagerProps } from 'App/DataSourceConstructor/components/SQLBuilder/components/common/WithPopoverManagement';
import { ClassesProp } from 'App/utils/classes-prop';
import { PickStates } from 'store/models/State';
import { Variable, VariableType } from 'schema';
import { VariablesPickerClassKeys } from './styles';

export interface VariablesPickerOwnProps {
  onVariablePicked: (variable: Variable) => void;
  type?: VariableType;
  filter?: (variable: Variable) => boolean;
}

export type VariablesPickerStateProps = PickStates<'variables'>;

type VariablesPicker = ClassesProp<VariablesPickerClassKeys>;

export type VariablesPickerProps = VariablesPickerStateProps &
  VariablesPickerOwnProps &
  Partial<VariablesPicker>;

export interface IVariablesPickerHandlers {
  handleVariablePick: (
    variable: Variable,
    handleClose: PopoverManagerProps['handleClose']
  ) => () => void;
}

export type VariablesPickerViewProps = VariablesPickerStateProps &
  IVariablesPickerHandlers &
  PopoverManagerProps &
  VariablesPicker;
