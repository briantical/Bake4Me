import {
  SET_SCROLL_SCREEN,
  SET_SCROLL_SCREEN_INDEX,
} from '_constants/action-types';

export const setScrollScreen = screens => ({
  type: SET_SCROLL_SCREEN,
  payload: screens,
});

export const setScrollScreenIndex = index => ({
  type: SET_SCROLL_SCREEN_INDEX,
  payload: index,
});
