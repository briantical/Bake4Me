import {
  SET_SCROLL_SCREEN,
  SET_CART_ITEMS,
  UPDATE_CART_ITEMS,
  DECREASE_COUNT,
  INCREASE_COUNT,
  SET_COUNT,
  SET_TOKEN,
  SET_USER,
} from '_constants/action-types';

export const setScrollScreen = screen => ({
  type: SET_SCROLL_SCREEN,
  payload: screen,
});

export const setCartItems = item => ({
  type: SET_CART_ITEMS,
  payload: item,
});

export const updateCartItems = item => ({
  type: UPDATE_CART_ITEMS,
  payload: item,
});

export const increaseCount = count => ({
  type: INCREASE_COUNT,
  payload: count,
});

export const decreaseCount = count => ({
  type: DECREASE_COUNT,
  payload: count,
});

export const setCount = count => ({
  type: SET_COUNT,
  payload: count,
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});
