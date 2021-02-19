import produce, { Draft } from 'immer';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';
import { BlockState, initialBlockState } from './models';

const block = produce(
  (draft: Draft<BlockState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getInfoBlock.request): {
        draft.info.loading = true;
        return draft;
      }
      case getType(actions.getInfoBlock.success): {
        draft.info.loading = true;
        draft.info.response = action.payload;
        return draft;
      }
      case getType(actions.getInfoBlock.failure): {
        draft.info.loading = false;
        draft.info.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialBlockState
);

export default combineReducers({ block, });
