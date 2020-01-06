import {combineReducers} from 'redux';

import errorMessage from './errorMessage';
import screens from './screens';
import cart from './cart';
import count from './count';
import token from './token';
import user from './user';

export default combineReducers({
  errorMessage,
  cart,
  count,
  token,
  user,
  screens,
});
