import * as React from 'react';
import { Popover } from '@material-ui/core';
import { getConfiguredRender } from 'App/DataSourceConstructor/test-utils/configured-render';
import { WithReduxProvider } from 'App/DataSourceConstructor/test-utils/contexts-provider/with-ReduxProvider';
import { getStore } from 'App/DataSourceConstructor/test-utils/store/getStore';
import * as casual from 'casual';

import { PopoverPaper, PopoverPaperProps } from '.';

const render = getConfiguredRender<PopoverPaperProps>(
  <PopoverPaper anchorEl={null} isOpen onClose={() => null} />,
  [WithReduxProvider(getStore())]
);

describe('PopoverPointer', () => {
  it(`should pass all props to Popover component properly,
    and onClose callback works properly`, () => {
    type PropsType = PopoverPaperProps & React.Props<any>;

    const props: PropsType = {
      isOpen: true,
      anchorEl: null,
      onClose: jest.fn(),
      children: casual.title,
    };

    render({ ...props });

    const PopoverMock = Popover as jest.Mock;
    const {
      open: isOpen,
      anchorEl,
      onClose,
      children,
    } = PopoverMock.mock.calls[0][0] as PropsType & { open: boolean };
    const calledProps: PropsType = { isOpen, anchorEl, onClose, children };

    expect(props).toEqual(calledProps);

    props.onClose();
    expect(onClose).toHaveBeenCalled();
  });
});
