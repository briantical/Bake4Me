import {SET_SCROLL_SCREEN_INDEX} from '_constants/action-types';

const screensindex = (state = 0, action) => {
  switch (action.type) {
    case SET_SCROLL_SCREEN_INDEX:
      return action.payload;
    default:
      return state;
  }
};

export default screensindex;
