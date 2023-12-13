import { ReducersMapObject } from 'redux';

import { canSaveFilter } from './can-save-filter/reducer';
import { operation } from './operation/reducer';
import { pickedVariables } from './variable/reducer';
import { MutateFilterPopoverState } from './state';

export const MutateFilterPopoverReducers: ReducersMapObject<MutateFilterPopoverState, any> = {
  operation,
  canSaveFilter,
  pickedVariables,
};
