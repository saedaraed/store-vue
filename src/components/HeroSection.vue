<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>Welcome to MyStore</h1>
      <p>Your favorite place to find high-quality products at unbeatable prices.</p>
      <router-link to="/products" class="shop-now-btn">Shop Now</router-link>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: url('@/assets/46c22f04e6a6e4e6a745fd99dbce2d87.jpg');
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.hero-content {
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 10px;
}

.hero-content h1 {
  font-size: 3em;
  margin-bottom: 15px;
}

.hero-content p {
  font-size: 1.3em;
  margin-bottom: 20px;
}

.shop-now-btn {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
  transition: background-color 0.3s ease;
}

.shop-now-btn:hover {
  background-color: #2c3e50;
}
</style>
