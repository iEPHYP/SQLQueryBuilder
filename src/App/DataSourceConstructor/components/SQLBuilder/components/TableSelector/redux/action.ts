import { Table } from 'App/DataSourceConstructor/schemas';
import { Action } from 'store/models/action-types';

export type SelectTableAction = Action<'SELECT_TABLE', { table: Table }>;

export const selectTable = (table: Table): SelectTableAction => ({
  type: 'SELECT_TABLE',
  table,
});
