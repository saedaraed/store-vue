<template>
  <div class="product-container" v-if="product">
    <div class="product-details">
      <div class="product-image-container">
        <img :src="product.image" alt="product.title" class="product-image"/>
      </div>
      <div class="product-info">
        <h1>{{ product.title }}</h1>
        <p class="price">Price: ${{ product.price }}</p>
        <p class="description">{{ product.description }}</p>
        <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
        <router-link to="/" class="back-link">Back to Store</router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'], 
  data() {
    return {
      product: null 
    };
  },
  methods: {
    fetchProduct() {
      axios.get(`https://fakestoreapi.com/products/${this.id}`)
        .then(response => {
          this.product = response.data; 
        })
        .catch(error => {
          console.error('Error fetching product details:', error);
        });
    },
    addToCart(product) {
      console.log('Added to cart:', product);
      this.$store.commit('addToCart', product); 
    }
  },
  created() {
    this.fetchProduct(); 
  }
};
</script>

<style scoped>
.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.product-details {
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  flex-direction: column;
}

@media(min-width: 768px) {
  .product-details {
    flex-direction: row;
  }
}

.product-image-container {
  flex: 1;
  margin-right: 20px;
}
.product-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
}

.price {
  font-size: 1.5em;
  font-weight: bold;
  color: #f08c00;
  margin-bottom: 15px;
}

.description {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
}

/* Add to Cart Button Styling */
.add-to-cart-btn {
  background-color: #28a745;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background-color 0.3s ease;
}
.add-to-cart-btn:hover {
  background-color: #218838;
}

.back-link {
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  border-radius: 4px;
  display: inline-block;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

</style>
