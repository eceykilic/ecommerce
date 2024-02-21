import * as types from './shoppingCartActionTypes';

export const addToCart = (product, count) => ({
  type: types.ADD_TO_CART,
  payload: { product, count },
});

export const removeFromCart = (productId) => ({
  type: types.REMOVE_FROM_CART,
  payload: { productId },
});

export const clearCart = () => ({
  type: types.CLEAR_CART,
});

export const setPaymentInfo = (paymentInfo) => ({
  type: types.SET_PAYMENT_INFO,
  payload: { paymentInfo },
});

export const setAddressInfo = (addressInfo) => ({
  type: types.SET_ADDRESS_INFO,
  payload: { addressInfo },
});
