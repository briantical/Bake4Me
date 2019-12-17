import {SET_SCROLL_SCREEN} from '_constants/action-types';

const screens = (
  state = [
    {key: 'cakes', title: 'Cakes'},
    {key: 'snacks', title: 'Snacks'},
    {key: 'addons', title: 'Addons'},
  ],
  action,
) => {
  switch (action.type) {
    case SET_SCROLL_SCREEN:
      return action.payload;
    default:
      return state;
  }
};

export default screens;
