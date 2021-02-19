export const GET_INFO_BLOCK = 'block/get_info';
export const GET_INFO_BLOCK_SUCCESS = 'block/get_info_success';
export const GET_INFO_BLOCK_FAILED = 'block/get_info_failed';

export type BlockAction =
  | typeof GET_INFO_BLOCK
  | typeof GET_INFO_BLOCK_SUCCESS
  | typeof GET_INFO_BLOCK_FAILED
