import * as React from 'react';
import { Provider } from 'react-redux';
import { Action, Store } from 'redux';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { getConfiguredStore } from 'store';
import { State } from 'store/models/State';

import { DataSourceConstructor as Controller } from './controller';
import { DataSourceConstructorOwnProps } from './props';

export class DataSourceConstructor extends React.Component<DataSourceConstructorOwnProps> {
  public store: Store<State, Action> = getConfiguredStore();

  public render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Provider store={this.store}>
          <Controller {...this.props} />
        </Provider>
      </MuiPickersUtilsProvider>
    );
  }
}
