const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_CART':
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;