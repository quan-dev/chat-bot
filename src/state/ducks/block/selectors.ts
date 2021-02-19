import { createSelector } from 'reselect';

import { StateAll } from '../models';
import { BlockState, initialBlockState } from './models';

const rootSelector = (state: StateAll) =>
  state.block.block || initialBlockState;

export const getInfoBlock = createSelector(
  rootSelector,
  (blockState: BlockState) => {
    return blockState.info
      ? blockState.info.response
      : initialBlockState.info.response;
  }
);
