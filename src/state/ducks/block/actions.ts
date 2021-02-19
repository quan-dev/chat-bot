import { createAsyncAction } from 'typesafe-actions';

import { BlocksRequest, BlocksResponse } from '../../api-models/blocks';
import * as types from './types';

// Create the set of async actions
export const getInfoBlock = createAsyncAction(
  types.GET_INFO_BLOCK,
  types.GET_INFO_BLOCK_SUCCESS,
  types.GET_INFO_BLOCK_FAILED
)<BlocksRequest, BlocksResponse, any>();
