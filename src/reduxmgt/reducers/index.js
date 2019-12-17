import {combineReducers} from 'redux';

import errorMessage from './errorMessage';
import screens from './screens';
import screensindex from './screensindex';

export default combineReducers({
  errorMessage,
  screens,
  screensindex,
});
