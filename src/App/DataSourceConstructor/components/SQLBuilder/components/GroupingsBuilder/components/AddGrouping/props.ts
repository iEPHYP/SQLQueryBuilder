import { actionCreators, PickActionCreators } from 'store/action-creators';
import { PickStates } from 'store/models/State';

import { PopoverManagerProps } from '../../../common/WithPopoverManagement';

export type AddGroupingOwnProps = PopoverManagerProps;

export type AddGroupingStateProps = PickStates<'groupings'>;

export type AddGroupingDispatchProps = PickActionCreators<'addGrouping'>;

export const AGMapDispatchToProps: AddGroupingDispatchProps = {
  addGrouping: actionCreators.addGrouping,
};

export type AddGroupingProps = AddGroupingStateProps & AddGroupingDispatchProps;

export type AddGroupingViewProps = AddGroupingOwnProps &
  AddGroupingStateProps &
  AddGroupingDispatchProps;
