<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 MyStore. All Rights Reserved.</p>
      <div class="footer-links">
      <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/cart" class="cart-link">
          <!-- SVG Cart Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 50px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  margin-top: 15px;
}

.footer-links a {
  color: #42b983;
  margin: 0 10px;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
