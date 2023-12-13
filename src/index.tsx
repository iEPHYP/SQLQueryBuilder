import React from 'react';
import * as ReactDOM from 'react-dom';
import { tablesMock } from 'App/DataSourceConstructor/redux/tables/tables.mock';

import { DataSourceConstructor } from './App/DataSourceConstructor';

ReactDOM.render(
  <React.StrictMode>
    <DataSourceConstructor databaseSchema={{ tables: tablesMock }} showQuery />
  </React.StrictMode>,
  document.getElementById('root')
);
