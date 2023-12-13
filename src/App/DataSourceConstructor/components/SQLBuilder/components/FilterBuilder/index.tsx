import { connect } from 'react-redux';
import { State } from 'store/models/State';

import { FilterBuilderStateProps } from './props';
import { FilterBuilder as View } from './view';

export const FilterBuilder = connect<FilterBuilderStateProps, {}, {}, State>(({ filters }) => ({
  filters,
}))(View);
