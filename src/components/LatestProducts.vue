<template>
  <section class="latest-products">
    <h2>Latest Products</h2>
    <div class="products-grid">
    <CardProduct 
          v-for="product in latestProducts" 
          :key="product.id" 
          :product="product" 
          @add-to-cart="addToCart"
        />
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import CardProduct from './CardProduct.vue';

export default {
  components:{
    CardProduct
  },
  data() {
    return {
      latestProducts: []
    };
  },
  methods:{
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    fetchProducts(){
      axios.get('https://fakestoreapi.com/products')
      .then(response=>{
        this.latestProducts = response.data.slice(-3);
        console.log('latest' , this.latestProducts)
      })
      .catch(error=>{
        console.log('error fetching products:' , error)
      })
    }
  },
  mounted(){
    this.fetchProducts();
  }

};
</script>

<style scoped>

.latest-products {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
}
.latest-products h2 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 40px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}




</style>
