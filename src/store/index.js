import { createStore } from 'vuex'; 

export default createStore({
  state: {
    cart: [] 
  },
  mutations: {
    addToCart(state, product) {
      const itemInCart = state.cart.find(item => item.id === product.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    }
  },
  getters: {
    cartItems(state) {
      return state.cart; 
    },
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    cartCount(state) {
      return state.cart.length; 
    }
  }
});
