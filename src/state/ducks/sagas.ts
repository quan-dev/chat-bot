import { all, fork } from 'redux-saga/effects';

import employeeSaga from './user/sagas';

// We `fork()` these tasks so they execute in the background.
export function* rootSagas() {
  yield all([
    fork(employeeSaga),
    // fork(teamsSaga),
    // `fork()` any other store sagas down here...
  ]);
}
