import {ADD_TO_CART, DECREMENT_CART_ITEM, SET_PAYMENT, SET_ADDRESS, TOGGLE_CHECK_ITEM, REMOVE_CART_ITEM} from '../actions/shoppingCart/shoppingCartActionTypes';

const initialState = {
  cartList: [],
  payment: {},
  address: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCartList = [...state.cartList];
        updatedCartList[existingProductIndex].count += 1;
        updatedCartList[existingProductIndex].checked = true;

        return { ...state, cartList: updatedCartList };
      } else {
        return {
          ...state,
          cartList: [
            ...state.cartList,
            { count: 1, checked: true, ...action.payload },
          ],
        };
      }
    case DECREMENT_CART_ITEM:
      const updatedCart = state.cartList
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: Math.max(0, item.count - 1) };
          }
          return item;
        })
        .filter((item) => item.count > 0);

      return { ...state, cartList: updatedCart };

    case REMOVE_CART_ITEM:
      const updatedCartAfterRemove = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, cartList: updatedCartAfterRemove };
    case TOGGLE_CHECK_ITEM:
      const toggledCart = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      return { ...state, cartList: toggledCart };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};

export default shoppingCartReducer;
