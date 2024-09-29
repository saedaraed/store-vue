<template>
  <div class="home">
    <HeroSection/>
    <LatestProducts/>
    <FooterStore/>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterStore from '@/components/FooterStore.vue';
import HeroSection from '@/components/HeroSection.vue';
import LatestProducts from '@/components/LatestProducts.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    LatestProducts,
    FooterStore
  }
}
</script>
