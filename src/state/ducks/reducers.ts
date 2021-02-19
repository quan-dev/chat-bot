import { combineReducers } from 'redux';

import blockProps from './block/reducers';
import layoutReducers from './layout/reducers';
import userReducers from './user/reducers';

// export { default as session } from './session';

export const rootReducers = combineReducers({
  user: userReducers,
  layout: layoutReducers,
  block: blockProps,
  // session,
});
