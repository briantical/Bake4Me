import {SET_SCROLL_SCREEN} from '_constants/action-types';

const screens = (state = 0, action) => {
  switch (action.type) {
    case SET_SCROLL_SCREEN:
      return action.payload;
    default:
      return state;
  }
};

export default screens;
