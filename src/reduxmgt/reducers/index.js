import {combineReducers} from 'redux';

import errorMessage from './errorMessage';
import screens from './screens';
import cart from './cart';
import count from './count';

export default combineReducers({
  errorMessage,
  cart,
  count,
  screens,
});
