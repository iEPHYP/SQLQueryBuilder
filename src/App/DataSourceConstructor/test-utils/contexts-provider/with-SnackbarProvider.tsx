import * as React from 'react';
import { SnackbarProvider } from 'notistack';

import { ContextProviderApplicator } from '../configured-render';

export const WithSnackbarProvider: ContextProviderApplicator = (children) => (
  <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
);
