import {CommonResponse,
  SearchRequest} from './common';

export type Item = {
  label: string;
  id: string;
}

export type BlocksRequest = (SearchRequest & {}) | undefined;

export type BlocksResponse = CommonResponse & {
  data?: {
    blocks: Item[];
    listGroupItem: Item[]
  };
};