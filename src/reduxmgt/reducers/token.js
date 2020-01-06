import {SET_TOKEN} from '_constants/action-types';

const token = (state = 0, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default token;
