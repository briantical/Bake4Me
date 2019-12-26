import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  SET_COUNT,
} from '_constants/action-types';

const count = (state = 1, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return ++action.payload;
    case DECREASE_COUNT:
      return action.payload <= 1 ? 1 : --action.payload;
    case SET_COUNT:
      return action.payload;
    default:
      return state;
  }
};

export default count;
