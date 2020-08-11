export const addCart = (productId) => ({
  type: 'ADD_CART',
  payload: productId,
});

export const removeCart = (payload) => ({
  type: 'REMOVE_CART',
  payload,
});

export const plus = (payload) => ({
  type: 'INCREASE_QTY',
  payload,
});

export const minus = (payload) => ({
  type: 'DECREASE_QTY',
  payload,
});
