const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        cart: [...state.cart, action.payload],
        quantityById: {
          ...state.quantityById,
          [action.payload]: (state.quantityById[action.payload] || 0) + 1,
        },
      };
    case 'REMOVE_CART':
      return {
        cart: state.cart.filter((productId) => productId !== action.payload),
        quantityById: {
          ...state.quantityById,
          [action.payload]: 0,
        },
      };
    case 'INCREASE_QTY':
      return {
        cart: [...state.cart],
        quantityById: {
          ...state.quantityById,
          [action.payload]: (state.quantityById[action.payload] || 0) + 1,
        },
      };
    case 'DECREASE_QTY':
      return {
        cart: [...state.cart],
        quantityById: {
          ...state.quantityById,
          [action.payload]: state.quantityById[action.payload] - 1,
        },
      };
    default:
      return state;
  }
};

export default reducer;
