import {SET_CART_ITEMS, UPDATE_CART_ITEMS} from '_constants/action-types';

const cart = (state = [], action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return [...state, action.payload];

    case UPDATE_CART_ITEMS:
      let newCart = action.payload;
      return state.map(cart => {
        if (cart.id === newCart.id) {
          cart = newCart;
        }
        return cart;
      });
    default:
      return state;
  }
};

export default cart;
