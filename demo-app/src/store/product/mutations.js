export function SET_PRODUCTS(state, val) {
  state.products = val; // Assign product list to state products
}

export function SET_PRODUCT(state, val) {
  state.product = val; // Assign an object with specific product to the product state
}

export function SET_LOAD(state, val) {
  state.uploadingData = val; // Assign an uploadingData state
}

export function SET_CART(state, val) {
  state.cart = val; // Assign a list of added products in the cart to cart state
}
