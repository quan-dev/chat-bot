import {
  all, call, put, takeLatest
} from 'redux-saga/effects';

import { API_ENDPOINTS } from '../../../config/api-endpoints/flow';
import { axiosInstance } from '../../utils/axios';
import * as actions from './actions';

// Handle request saga
function* getInfoBlock(
  action: ReturnType<typeof actions.getInfoBlock.request>
): Generator {
  try {
    const response = yield call(() =>
      axiosInstance.post(API_ENDPOINTS.info, action.payload)
    );
    yield put(actions.getInfoBlock.success((response as any).data));
  } catch (err) {
    yield put(actions.getInfoBlock.failure(err));
  }
}

// Main saga
export default function* employeeSaga() {
  yield all([
    takeLatest(actions.getInfoBlock.request, getInfoBlock),
  ]);
}
