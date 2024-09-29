<template>
<div class="store-container">
    <header>
      <h1>My Online Store</h1>
    </header>

    <section class="products">
      <div v-if="products.length" class="product-grid">
      <CardProduct 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
          @add-to-cart="addToCart"
        />
      </div>
      <div v-else>
        No products available
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import CardProduct from '@/components/CardProduct.vue';
export default {
  name: 'StoreView',
  components: {
    CardProduct
  },
  data() {
    return {
      products: []
    };
},
methods: {
  addToCart(product) {
    this.$store.commit('addToCart', product);
  },
  fetchProducts() {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data; 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }
},
mounted() {
  this.fetchProducts(); 
}
}
</script>
<style scoped>
.store-container {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
}

header {
  margin-bottom: 40px;
}
header h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.product-card h2 {
  font-size: 1.25em;
  margin-bottom: 10px;
  color: #333;
}

.price {
  font-size: 1.1em;
  font-weight: bold;
  color: #f08c00;
  margin-bottom: 15px;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s ease;
}
button:hover {
  background-color: #218838;
}
</style>


