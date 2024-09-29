<template>
  <div class="product-card">
    <router-link :to="`/product/${product.id}`">
      <img :src="product.image" :alt="product.title" class="product-image"/>
      <h2>{{ product.title }}</h2>
    </router-link>
    <p class="price">$ {{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  }
};
</script>

<style scoped>
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
