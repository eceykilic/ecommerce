import * as types from '../actions/shoppingCart/shoppingCartActionTypes';

const initialState = {
  cart: [],
  paymentInfo: {},
  addressInfo: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { count: action.payload.count, product: action.payload.product }],
      };

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload.productId),
      };

    case types.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case types.SET_PAYMENT_INFO:
      return {
        ...state,
        paymentInfo: action.payload.paymentInfo,
      };

    case types.SET_ADDRESS_INFO:
      return {
        ...state,
        addressInfo: action.payload.addressInfo,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;