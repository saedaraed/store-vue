<template>
  <div class="cart-container">
    <h1>Your Shopping Cart</h1>
    <div v-if="cartItems.length">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="cart-item-info">
            <h2>{{ item.title }}</h2>
            <p>Price: ${{ item.price }} x {{ item.quantity }}</p>
          </div>
          <div class="cart-item-actions">
            <button @click="removeFromCart(item.id)" class="remove-btn">Remove</button>
          </div>
        </div>
      </div>
      <div class="cart-total">
        <p>Total: ${{ cartTotal }}</p>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId);
    }
  }
};
</script>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.cart-item-info h2 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 5px;
}

.cart-item-info p {
  font-size: 1.1em;
  color: #555;
}

.cart-total {
  text-align: right;
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.remove-btn {
  background-color: #ff4d4d;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s ease;
}

.remove-btn:hover {
  background-color: #ff1a1a;
}

.empty-cart {
  text-align: center;
  padding: 50px 0;
  font-size: 1.5em;
  color: #777;
}

@media (min-width: 768px) {
  .cart-item {
    flex-direction: row;
  }
}
</style>
