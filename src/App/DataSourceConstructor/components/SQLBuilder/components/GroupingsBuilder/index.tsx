import { connect } from 'react-redux';
import { State } from 'store/models/State';
import { GroupingsBuilderStateProps } from './props';
import { GroupingsBuilder as View } from './view';

export const GroupingsBuilder = connect<
  GroupingsBuilderStateProps,
  {},
  {},
  State
>(({ groupings }) => ({
  groupings
}))(View);
