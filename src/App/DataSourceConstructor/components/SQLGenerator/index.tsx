import { connect } from 'react-redux';
import { State } from 'store/models/State';
import {
  SQLGeneratorDispatchProps,
  SQLGeneratorOwnProps,
  SQLGeneratorStateProps
} from './props';
import { SQLGenerator as View } from './view';

export const SQLGenerator = connect<
  SQLGeneratorStateProps,
  SQLGeneratorDispatchProps,
  SQLGeneratorOwnProps,
  State
>(({ sqlQuery }) => ({
  sqlQuery
}))(View);
