import {
  ADD_TO_CART,
  DECREMENT_CART_ITEM,
  SET_PAYMENT,
  SET_ADDRESS,
  TOGGLE_CHECK_ITEM,
  REMOVE_CART_ITEM,
} from "../actions/shoppingCart/shoppingCartActionTypes";

const initialState = {
  cart: [],
  payment: {},
  address: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    //sepete ekle
    case ADD_TO_CART:
      const addedToCartList = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (addedToCartList !== -1) {
        const updatedCartList = [...state.cart];
        updatedCartList[addedToCartList].count += 1;
        updatedCartList[addedToCartList].checked = true;

        return { ...state, cart: updatedCartList };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, ...action.payload },
          ],
        };
      }

    //tamamen sepetten çıkart
    case REMOVE_CART_ITEM:
      const updatedVersionCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, cart: updatedVersionCart };

    // sepetteki itemi düşür
    case DECREMENT_CART_ITEM:
      const updatedCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: Math.max(0, item.count - 1) };
          }
          return item;
        })
        .filter((item) => item.count > 0);

      return { ...state, cart: updatedCart };

    case TOGGLE_CHECK_ITEM:
      const toggledCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      return { ...state, cart: toggledCart };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};

export default shoppingCartReducer;
