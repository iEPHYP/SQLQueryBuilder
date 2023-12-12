import React from 'react';
import * as ReactDOM from 'react-dom';
import { DataSourceConstructor } from './App/DataSourceConstructor';
import { databaseSchemaMock } from 'App/DataSourceConstructor/mock.data';

ReactDOM.render(
  <React.StrictMode>
    <DataSourceConstructor databaseSchema={databaseSchemaMock} />
  </React.StrictMode>,
  document.getElementById('root')
);
