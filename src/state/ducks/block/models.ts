import { BlocksResponse } from '../../api-models/blocks';
import { BaseState } from '../models';

export type BlockInfo = BaseState<BlocksResponse>;

export type BlockState = {
  info: BlockInfo;
};

export const initialBlockState: BlockState = {info: {loading: false,
    response: {data: {blocks: [
          {id: '1',
            label: 'Chào mừng'},
          {id: '2',
            label: 'Tạm biệt'}
        ],
        listGroupItem: [
          {id: '1',
            label: 'Chào mừng'},
          {id: '2',
            label: 'Tạm biệt'}
        ]},
      success: true}}};

declare module './../models' {
  interface StateAll {
    // match to a duck folder
    block: {
      // match to reducer name, each reducer will be one field in state
      block: BlockState;
    };
  }
}
