import { actionCreators, PickActionCreators } from 'store/action-creators';
import { PickStates } from 'store/models/State';
import { PopoverManagerProps } from '../../../common/WithPopoverManagement';

export type AddAggregationOwnProps = PopoverManagerProps;

export type AddAggregationStateProps = PickStates<'aggregations'>;

export type AddAggregationDispatchProps = PickActionCreators<'addAggregation'>;

export const AAMapDispatchToProps: AddAggregationDispatchProps = {
  addAggregation: actionCreators.addAggregation
};

export type AddAggregationProps = AddAggregationStateProps & AddAggregationDispatchProps;

export type AddAggregationViewProps = AddAggregationOwnProps &
  AddAggregationStateProps &
  AddAggregationDispatchProps;
